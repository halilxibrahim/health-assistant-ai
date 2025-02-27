import React, { useState } from 'react';
import { User, Mail, Phone, FileText, Save } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  phone: string;
  medicalHistory: string;
}

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    phone: '+90 555 123 4567',
    medicalHistory: 'Alerjiler: Polen, Penisilin\nKronik Hastalıklar: Hipertansiyon\nGeçmiş Ameliyatlar: Apendektomi (2020)',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserData>(userData);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
    setSuccessMessage('Profil bilgileriniz başarıyla güncellendi!');
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Profil Bilgilerim</h1>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-800 rounded-md flex items-center">
            <Save className="h-5 w-5 mr-2" />
            {successMessage}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Kişisel Bilgiler</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 hover:text-blue-800"
              >
                {isEditing ? 'İptal' : 'Düzenle'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ad Soyad
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
                        required
                      />
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
                        required
                      />
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
                      />
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sağlık Geçmişi
                    </label>
                    <div className="relative">
                      <textarea
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10"
                        rows={5}
                      />
                      <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Alerjiler, kronik hastalıklar, geçmiş ameliyatlar gibi önemli sağlık bilgilerinizi buraya ekleyebilirsiniz.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Ad Soyad</p>
                    <p className="font-medium">{userData.name}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="font-medium">{userData.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Sağlık Geçmişi</p>
                    <pre className="font-medium whitespace-pre-wrap mt-1 font-sans">
                      {userData.medicalHistory}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Veri Gizliliği</h2>
          <p className="text-gray-700">
            Sağlık verileriniz güvenle saklanır ve yalnızca size daha iyi hizmet sunmak için kullanılır. Verileriniz üçüncü taraflarla paylaşılmaz ve istediğiniz zaman silinmesini talep edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;