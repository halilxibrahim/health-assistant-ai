import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, User, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sağlık Asistanınız Yanınızda
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sağlık sorularınızı yanıtlayan, randevularınızı planlayan ve sağlık yolculuğunuzda size rehberlik eden yapay zeka destekli asistanınız.
        </p>
        <div className="mt-8">
          <Link
            to="/chat"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Asistanla Konuşmaya Başla
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Sağlık Soruları</h3>
          <p className="text-gray-600">
            Genel sağlık sorularınızı yanıtlar, sağlıklı yaşam önerileri sunar ve sizi doğru bilgilerle yönlendirir.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Randevu Planlama</h3>
          <p className="text-gray-600">
            Doktor randevularınızı kolayca planlamanıza yardımcı olur ve randevu hatırlatmaları sunar.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Sağlık Takibi</h3>
          <p className="text-gray-600">
            Sağlık verilerinizi takip etmenize ve sağlık hedeflerinize ulaşmanıza yardımcı olur.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Nasıl Çalışır?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg">Asistanla Sohbet Edin</h3>
                <p className="text-gray-600">
                  Sağlık sorularınızı sorun veya randevu talebinizi belirtin.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg">Yapay Zeka Analizi</h3>
                <p className="text-gray-600">
                  Yapay zeka asistanımız talebinizi analiz eder ve en uygun yanıtı hazırlar.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg">Kişiselleştirilmiş Yardım</h3>
                <p className="text-gray-600">
                  Sağlık bilgilerinize ve tercihlerinize göre kişiselleştirilmiş yardım alın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Sağlığınız İçin Buradayız</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Sağlık Asistanımız, sağlık profesyonellerinin yerini almaz ancak temel sağlık sorularınızı yanıtlamak ve sizi doğru yönlendirmek için 7/24 hizmetinizdedir.
        </p>
        <Link
          to="/chat"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-block"
        >
          Şimdi Başlayın
        </Link>
      </section>
    </div>
  );
};

export default HomePage;