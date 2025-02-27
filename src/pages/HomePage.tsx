import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, User, Heart, ArrowRight, Shield, Check } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
            AI Sağlık Asistanı
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sağlık Asistanınız <span className="text-blue-600">Yanınızda</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Sağlık sorularınızı yanıtlayan, randevularınızı planlayan ve sağlık yolculuğunuzda size rehberlik eden yapay zeka destekli asistanınız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chat"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Asistanla Konuşmaya Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sağlık Asistanınız, günlük sağlık ihtiyaçlarınızda size destek olmak için tasarlanmıştır.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sağlık Soruları</h3>
              <p className="text-gray-600">
                Genel sağlık sorularınızı yanıtlar, sağlıklı yaşam önerileri sunar ve sizi doğru bilgilerle yönlendirir.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Semptom değerlendirmesi</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Genel sağlık tavsiyeleri</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Randevu Planlama</h3>
              <p className="text-gray-600">
                Doktor randevularınızı kolayca planlamanıza yardımcı olur ve randevu hatırlatmaları sunar.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Kolay randevu oluşturma</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Akıllı randevu hatırlatmaları</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sağlık Takibi</h3>
              <p className="text-gray-600">
                Sağlık verilerinizi takip etmenize ve sağlık hedeflerinize ulaşmanıza yardımcı olur.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Kişisel sağlık hedefleri</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>İlerleme raporları</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 mb-24 text-white shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Nasıl Çalışır?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-xl mb-3">Asistanla Sohbet Edin</h3>
                <p className="text-blue-100">
                  Sağlık sorularınızı sorun veya randevu talebinizi belirtin.
                </p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-xl mb-3">Yapay Zeka Analizi</h3>
                <p className="text-blue-100">
                  Yapay zeka asistanımız talebinizi analiz eder ve en uygun yanıtı hazırlar.
                </p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-xl mb-3">Kişiselleştirilmiş Yardım</h3>
                <p className="text-blue-100">
                  Sağlık bilgilerinize ve tercihlerinize göre kişiselleştirilmiş yardım alın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Güvenilir sağlık bilgileriyle desteklenen yapay zeka çözümümüz, sağlık yolculuğunuzda yanınızda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Güvenilir Bilgi</h3>
                <p className="text-gray-600">
                  Sağlık profesyonelleri tarafından doğrulanmış bilgilerle desteklenen yapay zeka asistanımız, doğru ve güncel sağlık bilgilerini sunar.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Kişiselleştirilmiş Deneyim</h3>
                <p className="text-gray-600">
                  Her kullanıcının benzersiz sağlık ihtiyaçlarına göre kişiselleştirilmiş çözümler sunar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center rounded-xl bg-gray-50 p-10 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6">Sağlığınız İçin Buradayız</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Sağlık Asistanımız, sağlık profesyonellerinin yerini almaz ancak temel sağlık sorularınızı yanıtlamak ve sizi doğru yönlendirmek için 7/24 hizmetinizdedir.
          </p>
          <Link
            to="/chat"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg"
          >
            Şimdi Başlayın
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;