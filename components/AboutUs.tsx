import React from 'react';
import { Heart, Leaf, Users, Award, Globe, Star, Mountain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mainLandscapeImage from 'figma:asset/52f6cd633fb19a76ad5c6b5b99fa99c8952e5acb.png';
import teamImage from 'figma:asset/f44d357149adae8ecc89cf9a9c1c63e806b8c322.png';

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-terracota" />,
      title: 'Pasión Andina',
      description: 'Cada tour nace del amor profundo por nuestra tierra y cultura ancestral.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-verde-coca" />,
      title: 'Turismo Sostenible',
      description: 'Protegemos y preservamos nuestros recursos naturales para futuras generaciones.'
    },
    {
      icon: <Users className="w-8 h-8 text-dorado" />,
      title: 'Experiencias Auténticas',
      description: 'Conectamos a los viajeros con la cultura viva de nuestras comunidades.'
    },
    {
      icon: <Award className="w-8 h-8 text-terracota" />,
      title: 'Calidad Premium',
      description: 'Ofrecemos servicios de alta calidad con guías locales especializados.'
    }
  ];

  const stats = [
    { number: '98%', label: 'Satisfacción del cliente' },
    { number: '15+', label: 'Destinos únicos' },
    { number: '500+', label: 'Tours realizados' },
    { number: '5★', label: 'Calificación promedio' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre <span className="text-terracota">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-andino mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cusco Lovers Perú nace del amor por la tierra andina y su gente. Somos una agencia local que diseña experiencias auténticas para viajeros conscientes.
          </p>
        </div>

        {/* Imagen principal del centro - Nueva imagen de paisajes andinos */}
        <div className="mb-16">
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-andino rounded-full blur-3xl opacity-20"></div>
            <img
              src={mainLandscapeImage}
              alt="Paisajes andinos - Cusco Lovers Perú"
              className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-sunset rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>

        {/* Contenido principal con nueva imagen del equipo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagen del equipo - Nueva imagen de personas */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-andino rounded-full blur-3xl opacity-20"></div>
            <img
              src={teamImage}
              alt="Equipo de Cusco Lovers Perú con visitantes"
              className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-sunset rounded-full blur-3xl opacity-20"></div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-terracota mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Compartir la riqueza cultural y natural del Cusco a través de experiencias transformadoras que generen un impacto positivo en nuestras comunidades locales y en cada viajero que nos visita.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-verde-coca mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser la agencia de turismo líder en el Cusco, reconocida por nuestro compromiso con el turismo sostenible, la preservación cultural y la creación de memorias inolvidables.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros <span className="text-dorado">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-gradient-andino rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Números que nos respaldan
            </h3>
            <p className="text-lg opacity-90">
              La confianza de nuestros viajeros es nuestro mayor logro
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;