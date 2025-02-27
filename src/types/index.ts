export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Appointment {
  id: string;
  patientName: string;
  date: Date;
  reason: string;
  status: 'scheduled' | 'cancelled' | 'completed';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  medicalHistory?: string[];
  appointments?: Appointment[];
}