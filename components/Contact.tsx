import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', tour: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-terracota" />,
      title: 'Teléfono',
      info: '+51 981 139 527',
      description: 'Línea directa 24/7'
    },
    {
      icon: <Mail className="w-6 h-6 text-verde-coca" />,
      title: 'Email',
      info: 'info@cuscolovers.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: <MapPin className="w-6 h-6 text-dorado" />,
      title: 'Dirección',
      info: 'Av. El Sol 123, Cusco',
      description: 'Centro histórico'
    },
    {
      icon: <Clock className="w-6 h-6 text-terracota" />,
      title: 'Horario',
      info: 'Lun - Dom: 8:00 - 20:00',
      description: 'Atención personalizada'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', href: '#' },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', href: '#' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', href: '#' },
    { icon: <MessageCircle className="w-6 h-6" />, name: 'WhatsApp', href: '#' }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gradient-andino mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para tu próxima aventura? Contáctanos y diseñaremos la experiencia perfecta para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Información de <span className="text-terracota">Contacto</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-lg text-gray-700 font-medium">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gradient-andino text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp destacado */}
            <div className="bg-gradient-nature text-white p-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">WhatsApp Directo</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Chatea con nosotros ahora y recibe respuesta inmediata
                  </p>
                  <a 
                    href="https://wa.me/51981139527"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-verde-coca px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Iniciar Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un <span className="text-terracota">Mensaje</span>
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-600">Te responderemos dentro de las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent transition-all duration-300"
                      placeholder="+51 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-2">
                      Tour de interés
                    </label>
                    <select
                      id="tour"
                      name="tour"
                      value={formData.tour}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecciona un tour</option>
                      <option value="machu-picchu">Machu Picchu Clásico</option>
                      <option value="valle-sagrado">Valle Sagrado + Chinchero</option>
                      <option value="7-colores">Montaña de 7 Colores</option>
                      <option value="huchuy-qosqo">Huchuy Qosqo</option>
                      <option value="personalizado">Tour personalizado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracota focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu viaje ideal..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-andino text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;