import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";

// Initialize the OpenAI model
const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const chatModel = new ChatOpenAI({
  openAIApiKey,
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

// Create a health assistant prompt template
const healthAssistantPrompt = PromptTemplate.fromTemplate(`
You are a helpful healthcare assistant named HealthBot. You provide information and guidance on general health topics.
You can answer basic health questions, provide general wellness advice, and help with scheduling appointments.

Important guidelines:
1. Always be professional, empathetic, and supportive.
2. For medical emergencies, advise seeking immediate medical attention.
3. Do not provide specific medical diagnoses or treatment recommendations.
4. Clarify that you're an AI assistant and not a licensed healthcare professional.
5. For appointment scheduling, collect necessary information like preferred date, time, and reason.

User query: {query}

Please provide a helpful, accurate, and compassionate response:
`);

// Create a chain for processing health-related queries
export const getHealthAssistantResponse = async (query: string): Promise<string> => {
  try {
    const chain = healthAssistantPrompt.pipe(chatModel).pipe(new StringOutputParser());
    const response = await chain.invoke({ query });
    return response;
  } catch (error) {
    console.error("Error getting response from OpenAI:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};

// Function to handle appointment scheduling
export const processAppointmentRequest = async (
  query: string,
  patientName: string
): Promise<string> => {
  const appointmentPrompt = PromptTemplate.fromTemplate(`
    You are a healthcare appointment scheduling assistant. Extract appointment details from the user's request.
    User: {query}
    Patient name: {patientName}
    
    Extract the following information in JSON format:
    1. Preferred date and time
    2. Reason for appointment
    3. Any special requirements
    
    If any information is missing, indicate what needs to be asked to complete the appointment request.
    Format your response as valid JSON.
  `);

  try {
    const chain = appointmentPrompt.pipe(chatModel).pipe(new StringOutputParser());
    const response = await chain.invoke({ query, patientName });
    return response;
  } catch (error) {
    console.error("Error processing appointment request:", error);
    return JSON.stringify({
      error: "Failed to process appointment request",
      missingInformation: ["Please provide preferred date, time, and reason for the appointment"]
    });
  }
};