import React from 'react';
import { Mountain, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle, Heart, Star } from 'lucide-react';
import cuscoLoversLogo from 'figma:asset/b82cd2302e57d3163e81293f6ca709acbf2b74cc.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Tours', href: '#tours' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const popularTours = [
    { name: 'Machu Picchu Clásico', price: 'S/450' },
    { name: 'Valle Sagrado + Chinchero', price: 'S/320' },
    { name: 'Montaña de 7 Colores', price: 'S/280' },
    { name: 'Huchuy Qosqo', price: 'S/600' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <MessageCircle className="w-5 h-5" />, name: 'WhatsApp', href: 'https://wa.me/51981139527' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa con logo */}
          <div className="lg:col-span-1">
            {/* Logo y nombre de la empresa */}
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={cuscoLoversLogo}
                alt="Cusco Lovers Perú Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Cusco Lovers</h3>
                <p className="text-sm text-terracota">Perú</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Somos una agencia local especializada en experiencias auténticas que conectan a los viajeros con la cultura viva del Cusco y la magia de los Andes.
            </p>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 (500+ reviews)</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-dorado">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-terracota transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours populares */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-verde-coca">Tours Populares</h4>
            <ul className="space-y-3">
              {popularTours.map((tour, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">{tour.name}</span>
                  <span className="text-terracota font-semibold text-sm">{tour.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-dorado">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-terracota flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">Av. El Sol 123</p>
                  <p className="text-gray-300 text-sm">Cusco, Perú</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-verde-coca flex-shrink-0" />
                <p className="text-gray-300 text-sm">+51 981 139 527</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dorado flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@cuscolovers.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-terracota flex-shrink-0" />
                <p className="text-gray-300 text-sm">Lun - Dom: 8:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
                Síguenos en nuestras redes sociales
              </h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.name === 'WhatsApp' ? '_blank' : undefined}
                    rel={social.name === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="bg-gray-800 hover:bg-gradient-andino text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">Certificaciones</p>
              <div className="flex space-x-4 justify-center md:justify-end">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">
                  Turismo Sostenible
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">
                  Guías Certificados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Cusco Lovers Perú. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>en Cusco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;