import React from 'react';
import { Sparkles, Clock, Users, Mountain, ArrowRight, Timer } from 'lucide-react';
import huchuyQosqoNewImage from 'figma:asset/fe959c6316918d002dc65a7dde40a69a97f1f848.png';

const PromotionSection = () => {
  const features = [
    {
      icon: <Mountain className="w-6 h-6 text-white" />,
      title: 'Trekking Panorámico',
      description: 'Camina entre montañas espectaculares con vistas únicas'
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Historia Viva',
      description: 'Explora sitios arqueológicos poco conocidos pero fascinantes'
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Experiencia Única',
      description: 'Perfecto para aventureros que buscan algo diferente'
    }
  ];

  const benefits = [
    'Guía especializado incluido',
    'Equipamiento de camping completo',
    'Comidas durante todo el tour',
    'Transporte ida y vuelta',
    'Certificado de participación',
    'Fotos profesionales del recorrido'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-terracota via-terracota to-terracota-dark text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-dorado rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge de promoción */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-dorado text-terracota px-6 py-3 rounded-full font-semibold text-lg mb-4">
            <Sparkles className="w-5 h-5 mr-2" />
            PROMOCIÓN ESPECIAL
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tour <span className="text-dorado">Huchuy Qosqo</span>
            </h2>
            
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-dorado mr-4">20% OFF</div>
              <div className="text-lg">
                <span className="line-through text-gray-300">S/750</span>
                <span className="text-2xl font-bold ml-2">S/600</span>
              </div>
            </div>

            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              ¡Aprovecha nuestra promoción especial! Descubre Huchuy Qosqo, el "Cusco Pequeño", en un trekking único entre montañas, historia viva y vistas impresionantes.
            </p>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Beneficios */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Lo que incluye:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-dorado rounded-full"></div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgencia */}
            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-3">
                <Timer className="w-5 h-5 text-dorado mr-2" />
                <span className="font-semibold">Oferta por tiempo limitado</span>
              </div>
              <p className="text-sm text-gray-200">
                Solo quedan <span className="text-dorado font-bold">5 cupos</span> disponibles para las próximas fechas. ¡No te quedes sin tu aventura!
              </p>
            </div>

            <button className="group bg-dorado text-terracota px-8 py-4 rounded-full font-semibold text-lg hover:bg-dorado-dark transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-2xl">
              <span>Reserva ahora con descuento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Imagen actualizada */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={huchuyQosqoNewImage}
                alt="Huchuy Qosqo - Construcciones andinas tradicionales"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Badge de descuento */}
              <div className="absolute top-4 right-4 bg-dorado text-terracota px-4 py-2 rounded-full font-bold text-xl">
                -20%
              </div>
              
              {/* Duración */}
              <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">2 días / 1 noche</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;