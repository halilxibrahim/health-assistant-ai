import React from 'react';
import ChatInterface from '../components/ChatInterface';

const ChatPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Sağlık Asistanı</h1>
        <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
          <ChatInterface />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Not: Bu asistan genel sağlık bilgileri sağlar ve tıbbi tavsiye vermez. Acil durumlar için lütfen sağlık profesyonellerine başvurun.
        </p>
      </div>
    </div>
  );
};

export default ChatPage;