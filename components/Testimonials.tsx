import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number;
  review: string;
  avatar: string;
  tour: string;
  date: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'Estados Unidos',
      rating: 5,
      review: 'Una experiencia absolutamente increíble. El tour a Machu Picchu superó todas mis expectativas. Los guías son muy conocedores y apasionados por su cultura. Definitivamente recomiendo Cusco Lovers.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9d12370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      tour: 'Machu Picchu Clásico',
      date: 'Marzo 2024'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      country: 'Italia',
      rating: 5,
      review: 'El tour del Valle Sagrado fue fantástico. Pudimos conectar realmente con la cultura local y aprender sobre la historia ancestral. La organización fue perfecta y el almuerzo tradicional delicioso.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      tour: 'Valle Sagrado + Chinchero',
      date: 'Febrero 2024'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      country: 'Reino Unido',
      rating: 5,
      review: 'La Montaña de 7 Colores fue un desafío hermoso. A pesar de la altitud, nuestro guía nos ayudó todo el camino. Las vistas son simplemente espectaculares. Una experiencia que llevaré en mi corazón para siempre.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tour: 'Montaña de 7 Colores',
      date: 'Abril 2024'
    },
    {
      id: 4,
      name: 'Luis García',
      country: 'España',
      rating: 5,
      review: 'Huchuy Qosqo fue la aventura perfecta. Dos días increíbles de trekking, historia y paisajes únicos. El equipo de Cusco Lovers se encargó de todo. Profesionales y muy amables.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tour: 'Huchuy Qosqo',
      date: 'Enero 2024'
    },
    {
      id: 5,
      name: 'Yuki Tanaka',
      country: 'Japón',
      rating: 5,
      review: 'Servicio excepcional desde el primer contacto. Los tours están muy bien organizados y los guías hablan perfectamente varios idiomas. Me sentí muy segura durante todo el viaje.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      tour: 'Valle Sagrado + Chinchero',
      date: 'Diciembre 2023'
    },
    {
      id: 6,
      name: 'André Silva',
      country: 'Brasil',
      rating: 5,
      review: 'Como fotógrafo, quedé impresionado por los lugares que visitamos. Cada tour está diseñado para capturar la esencia del Cusco. Los guías conocen los mejores ángulos y momentos del día.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      tour: 'Montaña de 7 Colores',
      date: 'Noviembre 2023'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lo que dicen nuestros <span className="text-terracota">Viajeros</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-andino mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 500 viajeros han confiado en nosotros para vivir experiencias únicas en el Cusco.
          </p>
        </div>

        {/* Carrusel de testimonios */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <ImageWithFallback
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-dorado"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="mb-4">
                          <Quote className="w-8 h-8 text-terracota mx-auto md:mx-0 mb-2" />
                          <p className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.review}"
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="mb-4 md:mb-0">
                            <h4 className="text-xl font-bold text-gray-800 mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 mb-2">{testimonial.country}</p>
                            {renderStars(testimonial.rating)}
                          </div>
                          
                          <div className="text-center md:text-right">
                            <p className="text-terracota font-semibold mb-1">{testimonial.tour}</p>
                            <p className="text-gray-500 text-sm">{testimonial.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 text-terracota p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Indicadores */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-terracota' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 text-terracota p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-terracota mb-2">4.9</div>
            <div className="text-gray-600">Calificación promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-verde-coca mb-2">500+</div>
            <div className="text-gray-600">Viajeros satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-dorado mb-2">98%</div>
            <div className="text-gray-600">Recomendación</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;