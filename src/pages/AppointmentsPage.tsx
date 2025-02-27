import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import { Calendar, Clock, FileText, Check, X } from 'lucide-react';

interface Appointment {
  id: string;
  date: string;
  time: string;
  reason: string;
  status: 'scheduled' | 'cancelled' | 'completed';
}

const AppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      date: '2025-06-15',
      time: '14:30',
      reason: 'Yıllık check-up',
      status: 'scheduled',
    },
    {
      id: '2',
      date: '2025-06-10',
      time: '10:00',
      reason: 'Diş kontrolü',
      status: 'scheduled',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAppointmentScheduled = (details: {
    date: string;
    time: string;
    reason: string;
  }) => {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...details,
      status: 'scheduled',
    };

    setAppointments([...appointments, newAppointment]);
    setShowForm(false);
    setSuccessMessage('Randevunuz başarıyla oluşturuldu!');
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleStatusChange = (id: string, status: 'scheduled' | 'cancelled' | 'completed') => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Randevularım</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {showForm ? 'İptal' : 'Yeni Randevu'}
          </button>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-800 rounded-md flex items-center">
            <Check className="h-5 w-5 mr-2" />
            {successMessage}
          </div>
        )}

        {showForm ? (
          <div className="mb-8">
            <AppointmentForm onAppointmentScheduled={handleAppointmentScheduled} />
          </div>
        ) : null}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="font-semibold">Yaklaşan Randevular</h2>
          </div>

          {appointments.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              Henüz randevunuz bulunmamaktadır.
            </div>
          ) : (
            <div className="divide-y">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{appointment.reason}</h3>
                      <div className="mt-2 space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>
                            {new Date(appointment.date).toLocaleDateString('tr-TR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          appointment.status === 'scheduled'
                            ? 'bg-blue-100 text-blue-800'
                            : appointment.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {appointment.status === 'scheduled'
                          ? 'Planlandı'
                          : appointment.status === 'completed'
                          ? 'Tamamlandı'
                          : 'İptal Edildi'}
                      </span>
                      {appointment.status === 'scheduled' && (
                        <button
                          onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                          className="text-red-600 hover:text-red-800"
                          title="Randevuyu iptal et"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;