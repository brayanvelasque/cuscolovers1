import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain, Phone, Mail } from 'lucide-react';
import logoImage from 'figma:asset/b82cd2302e57d3163e81293f6ca709acbf2b74cc.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Cusco Lovers Perú" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-terracota">Cusco Lovers</h1>
              <p className="text-sm text-verde-coca">Perú</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-terracota transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-terracota transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('tours')}
              className="text-gray-700 hover:text-terracota transition-colors"
            >
              Tours
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className="text-gray-700 hover:text-terracota transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-terracota transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+51 981 139 527</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>info@cuscolovers.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in-up">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-terracota transition-colors py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-terracota transition-colors py-2"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('tours')}
                className="text-left text-gray-700 hover:text-terracota transition-colors py-2"
              >
                Tours
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-left text-gray-700 hover:text-terracota transition-colors py-2"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-terracota transition-colors py-2"
              >
                Contacto
              </button>
              <div className="pt-4 border-t">
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+51 981 139 527</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>info@cuscolovers.com</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;