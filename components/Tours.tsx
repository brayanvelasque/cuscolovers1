import React, { useState } from 'react';
import { Clock, Users, MapPin, Star, Calendar, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import valleSagradoImage from 'figma:asset/b753cf54064f9271161241f844da50563fe0efc4.png';
import rainbowMountainImage from 'figma:asset/88724afe71a779003dc943e48af43493d938f281.png';
import huchuyQosqoImage from 'figma:asset/08565b713be3229b29b6a293360699233c752f80.png';

interface Tour {
  id: number;
  name: string;
  description: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  highlights: string[];
  difficulty: 'Fácil' | 'Moderado' | 'Difícil';
  category: string;
  isPromotion?: boolean;
}

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const tours: Tour[] = [
    {
      id: 1,
      name: 'Machu Picchu Clásico',
      description: 'Descubre la ciudadela sagrada de los Incas en una experiencia única e inolvidable.',
      duration: '1 día',
      groupSize: '2-15 personas',
      price: 'S/450',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      highlights: ['Ciudadela de Machu Picchu', 'Guía especializado', 'Tren panorámico'],
      difficulty: 'Fácil',
      category: 'Arqueológico'
    },
    {
      id: 2,
      name: 'Valle Sagrado + Chinchero',
      description: 'Explora el corazón del imperio Inca visitando pueblos tradicionales y sitios arqueológicos.',
      duration: '1 día',
      groupSize: '2-12 personas',
      price: 'S/320',
      rating: 4.8,
      image: valleSagradoImage,
      highlights: ['Valle Sagrado', 'Chinchero', 'Mercado local', 'Almuerzo tradicional'],
      difficulty: 'Fácil',
      category: 'Cultural'
    },
    {
      id: 3,
      name: 'Montaña de 7 Colores',
      description: 'Trekking hacia la famosa montaña arco iris, una maravilla natural única en el mundo.',
      duration: '1 día',
      groupSize: '2-10 personas',
      price: 'S/280',
      rating: 4.7,
      image: rainbowMountainImage,
      highlights: ['Montaña 7 Colores', 'Trekking guiado', 'Desayuno incluido'],
      difficulty: 'Moderado',
      category: 'Aventura'
    },
    {
      id: 4,
      name: 'Huchuy Qosqo',
      description: 'Descubre el "Cusco Pequeño" en un trekking único entre montañas y historia viva.',
      duration: '2 días',
      groupSize: '2-8 personas',
      price: 'S/600',
      originalPrice: 'S/750',
      rating: 4.9,
      image: huchuyQosqoImage,
      highlights: ['Sitio arqueológico', 'Trekking panorámico', 'Camping incluido', 'Guía experto'],
      difficulty: 'Moderado',
      category: 'Trekking',
      isPromotion: true
    }
  ];

  const categories = ['Todos', 'Arqueológico', 'Cultural', 'Aventura', 'Trekking'];

  const filteredTours = selectedCategory === 'Todos' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'text-green-600 bg-green-100';
      case 'Moderado': return 'text-yellow-600 bg-yellow-100';
      case 'Difícil': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestros <span className="text-terracota">Tours</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-andino mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora el Cusco con nuestros tours cuidadosamente diseñados para ofrecerte experiencias auténticas y memorables.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-andino text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden group"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden">
                {typeof tour.image === 'string' && tour.image.startsWith('https://') ? (
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                {tour.isPromotion && (
                  <div className="absolute top-4 left-4 bg-gradient-sunset text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    Promoción
                  </div>
                )}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(tour.difficulty)}`}>
                  {tour.difficulty}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{tour.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                {/* Detalles */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{tour.category}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Precio y botón */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-terracota">{tour.price}</span>
                    {tour.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {tour.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-gradient-andino text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-1 group">
                    <span>Reservar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-nature text-white px-8 py-4 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <Calendar className="w-5 h-5" />
            <span>Ver todos los tours</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;