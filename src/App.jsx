import React, { useState } from 'react';
import { Menu, X, Instagram, Mail, Phone, ChevronRight } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Brand Colors Configuration
  // using hex code for a rich, luxury brown: #5D4037
  const brandColors = {
    brown: 'text-[#5D4037]',
    bgBrown: 'bg-[#5D4037]',
    hoverBrown: 'hover:bg-[#4E342E]',
    borderBrown: 'border-[#5D4037]',
  };

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-[#5D4037] selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <h1 className={`text-2xl font-serif tracking-widest font-bold ${brandColors.brown}`}>
                CUTSBYLIMA
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm uppercase tracking-widest hover:${brandColors.brown} transition-colors duration-300`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={brandColors.brown}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full border-b border-gray-100 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-gray-50 uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-4">
        {/* Background Image Placeholder - Replace 'url' with your actual bridal image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80")' }} 
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Dark Overlay */}
        </div>

        <div className="relative z-10 text-white max-w-4xl mx-auto mt-16">
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4">Bridal & Couture</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
            Timeless Elegance.<br />Modern Artistry.
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-gray-200 max-w-2xl mx-auto">
            We create exquisite bridal gowns and couture pieces designed to celebrate your style, your story, and your unforgettable moments.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${brandColors.bgBrown} text-white px-8 py-4 uppercase tracking-widest text-sm hover:opacity-90 transition-all`}
            >
              Book a Fitting
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-transparent border border-white text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-[#5D4037] transition-all"
            >
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${brandColors.brown}`}>What We Offer</h2>
            <div className={`w-20 h-0.5 mx-auto ${brandColors.bgBrown}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Bridal Couture", desc: "Custom-made wedding gowns tailored to your silhouette, crafted with luxury fabrics and precision artistry." },
              { title: "Evening & Red Carpet", desc: "Statement pieces for galas, award nights, and celebrations where you must stand out." },
              { title: "Traditional & Aso-Oke", desc: "Cultural elegance crafted with modern finesse. Yoruba, Igbo, Hausa, and more." },
              { title: "Ready-to-Wear", desc: "Limited-edition outfits designed for women who love refined luxury." }
            ].map((service, index) => (
              <div key={index} className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <h3 className={`text-xl font-serif mb-4 group-hover:${brandColors.brown}`}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-[#F9F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 h-[500px] bg-gray-300 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1585419430129-23f2762b9f3d?auto=format&fit=crop&q=80" 
                 alt="Tailoring" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="w-full md:w-1/2">
              <h4 className="uppercase tracking-widest text-sm text-gray-500 mb-2">The Brand</h4>
              <h2 className={`text-3xl md:text-5xl font-serif mb-6 ${brandColors.brown}`}>Meet The Creative Director</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CutsbyLima was born from a passion for artistry, femininity, and the beauty of intentional design. 
                From sketching gowns as a young girl to creating bespoke masterpieces for brides, we believe fashion should do more than dress — it should transform.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                {['Timeless Luxury', 'Handcrafted Details', 'Modern Silhouettes'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight size={16} className={brandColors.brown} /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contact')} className={`border-b-2 ${brandColors.borderBrown} ${brandColors.brown} pb-1 uppercase tracking-widest text-sm hover:opacity-70`}>
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO / LOOKBOOK --- */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${brandColors.brown}`}>Luxury Craftsmanship</h2>
            <p className="text-gray-500">A glimpse into our world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative h-[500px] overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1596451190630-186aff535bf2?auto=format&fit=crop&q=80" alt="Bridal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="uppercase tracking-widest text-xs mb-2">Bridal</p>
                <h3 className="text-2xl font-serif">The Serene Bride</h3>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative h-[500px] overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80" alt="Evening" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="uppercase tracking-widest text-xs mb-2">Couture</p>
                <h3 className="text-2xl font-serif">Red Carpet Gold</h3>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative h-[500px] overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1617112836279-56363071f021?auto=format&fit=crop&q=80" alt="Traditional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="uppercase tracking-widest text-xs mb-2">Traditional</p>
                <h3 className="text-2xl font-serif">Royal Aso-Oke</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/cutsbylima" 
              target="_blank" 
              rel="noreferrer"
              className={`inline-flex items-center gap-2 ${brandColors.brown} uppercase tracking-widest text-sm hover:underline`}
            >
              <Instagram size={18} /> View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className={`py-20 ${brandColors.bgBrown} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Book a Fitting</h2>
            <p className="text-white/80">Ready to create something special? Let's talk.</p>
          </div>

          <div className="bg-white text-gray-800 p-8 md:p-12 shadow-2xl rounded-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5D4037] transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                  <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5D4037] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5D4037] transition-colors" placeholder="email@example.com" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">What are you looking for?</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5D4037] bg-white">
                  <option>Bridal Couture</option>
                  <option>Evening / Red Carpet</option>
                  <option>Traditional / Aso-Oke</option>
                  <option>Ready-to-Wear</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tell us about your vision</label>
                <textarea rows="4" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#5D4037] transition-colors" placeholder="Describe your dream outfit..."></textarea>
              </div>

              <button className={`w-full ${brandColors.bgBrown} text-white py-4 uppercase tracking-widest hover:opacity-90 transition-all mt-4`}>
                Send Request
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Phone / WhatsApp</p>
              <p className="text-lg font-serif">0906 484 9795</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Email</p>
              <p className="text-lg font-serif">harandre29@gmail.com</p>
            </div>

            <div className="flex flex-col items-center">
              <a href="https://instagram.com/cutsbylima" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white group-hover:text-[#5D4037] transition-colors">
                  <Instagram size={24} />
                </div>
                <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Instagram</p>
                <p className="text-lg font-serif">@cutsbylima</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#4E342E] text-white/40 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} CutsbyLima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
