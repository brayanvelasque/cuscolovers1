import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo paisajístico */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
          alt="Paisaje andino del Cusco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-dorado/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-terracota/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-verde-coca/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Descubre{' '}
            <span className="text-dorado">Cusco</span>
            <br />
            con experiencias{' '}
            <span className="text-terracota">reales</span>
            <br />
            y <span className="text-verde-coca">memorables</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Vive la magia de los Andes con tours auténticos que conectan tu alma con la cultura viva del Perú
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToTours}
              className="group bg-gradient-andino text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <span className="text-lg">Explora nuestros tours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center space-x-2 border border-white/30">
              <Play className="w-5 h-5" />
              <span className="text-lg">Ver video</span>
            </button>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-dorado mb-2">500+</div>
            <div className="text-gray-300">Viajeros felices</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-terracota mb-2">15+</div>
            <div className="text-gray-300">Tours únicos</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-verde-coca mb-2">5 años</div>
            <div className="text-gray-300">De experiencia</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;