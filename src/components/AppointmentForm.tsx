import React, { useState } from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';
import { processAppointmentRequest } from '../utils/openai';

interface AppointmentFormProps {
  onAppointmentScheduled: (details: {
    date: string;
    time: string;
    reason: string;
  }) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  onAppointmentScheduled,
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAppointmentScheduled({ date, time, reason });
    // Reset form
    setDate('');
    setTime('');
    setReason('');
  };

  const handleAIAssist = async () => {
    if (!reason) return;
    
    setIsProcessing(true);
    try {
      const response = await processAppointmentRequest(
        reason,
        'Hasta' // This would normally come from user profile
      );
      
      // Parse the response (assuming it's JSON)
      try {
        const parsedResponse = JSON.parse(response);
        if (parsedResponse.preferredDate) {
          setDate(parsedResponse.preferredDate.split('T')[0]);
        }
        if (parsedResponse.preferredTime) {
          setTime(parsedResponse.preferredTime);
        }
        
        setAiSuggestion(
          'AI, randevu talebinizi analiz etti ve bazı detaylar önerdi. Lütfen kontrol edin ve gerekirse düzenleyin.'
        );
      } catch (parseError) {
        // If not valid JSON, just show the response as a suggestion
        setAiSuggestion(response);
      }
    } catch (error) {
      console.error('Error processing appointment with AI:', error);
      setAiSuggestion('Randevu talebinizi işlerken bir hata oluştu. Lütfen manuel olarak doldurun.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Randevu Planlama
      </h2>

      {aiSuggestion && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-sm">
          {aiSuggestion}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Randevu Nedeni
          </label>
          <div className="relative">
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Randevu talebinizin nedenini açıklayın..."
              rows={3}
              required
            />
            <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="button"
            onClick={handleAIAssist}
            disabled={!reason || isProcessing}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800 disabled:text-gray-400"
          >
            {isProcessing ? 'İşleniyor...' : 'AI ile analiz et'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tarih
          </label>
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
              required
            />
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Saat
          </label>
          <div className="relative">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
              required
            />
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Randevu Oluştur
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;