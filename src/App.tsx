import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import AppointmentsPage from './pages/AppointmentsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <footer className="bg-white border-t py-6">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>© 2025 Sağlık Asistanı. Tüm hakları saklıdır.</p>
            <p className="mt-2">
              Bu uygulama tıbbi tavsiye vermez. Acil durumlar için lütfen sağlık profesyonellerine başvurun.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;