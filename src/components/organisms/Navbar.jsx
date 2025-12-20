import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { cn } from '../../utils/cn';
import { services } from '../../data/services';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Servicios', path: '/servicios', hasSubmenu: true },
  { name: 'Planes', path: '/planes' },
  { name: 'Contacto', path: '/contacto' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasSubmenu ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
                      location.pathname.startsWith(link.path) ? 'text-primary' : 'text-slate-600'
                    )}
                    onMouseEnter={() => setActiveSubmenu(link.name)}
                    onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown size={14} className={cn("transition-transform", activeSubmenu === link.name ? "rotate-180" : "")} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Submenu */}
                {link.hasSubmenu && (
                  <div 
                    className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    )}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                        {services.map(service => (
                            <Link 
                                key={service.id} 
                                to={`/servicios/${service.id}`}
                                className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors cursor-pointer"
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    {link.hasSubmenu ? (
                      <>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className={cn(
                            "flex items-center justify-between w-full p-3 text-base font-medium rounded-lg transition-colors",
                             activeSubmenu === link.name ? "text-primary bg-blue-50" : "text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          {link.name}
                          <ChevronDown 
                            size={16} 
                            className={cn("transition-transform duration-200", activeSubmenu === link.name ? "rotate-180" : "")} 
                          />
                        </button>
                        <AnimatePresence>
                            {activeSubmenu === link.name && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden pl-2"
                                >
                                    {services.map(service => (
                                        <Link
                                            key={service.id}
                                            to={`/servicios/${service.id}`}
                                            className="block p-3 text-sm text-slate-500 hover:text-primary transition-colors border-l-2 border-slate-100 hover:border-primary ml-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={cn(
                          "block p-3 text-base font-medium rounded-lg transition-colors",
                          location.pathname === link.path ? "text-primary bg-blue-50" : "text-slate-600 hover:bg-slate-50"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};
