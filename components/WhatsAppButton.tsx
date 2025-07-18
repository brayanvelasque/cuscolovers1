import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 2 segundos para una mejor UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '51981139527';
    const message = '¡Hola! Me interesa conocer más sobre los tours de Cusco Lovers Perú.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`relative transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap">
            <p className="text-sm font-semibold">¡Chatea con nosotros!</p>
            <p className="text-xs text-gray-600">Respuesta inmediata</p>
            {/* Flecha */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>

        {/* Botón principal */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
          title="Contactar por WhatsApp"
        >
          {/* Efecto de pulso */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
          
          {/* Icono */}
          <MessageCircle className="w-6 h-6 relative z-10" />
          
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>

        {/* Badge de notificación */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;