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
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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
          <Link to="/contacto">
            <Button size="sm" className="cursor-pointer">Contáctanos</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <Container className="py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                    {link.hasSubmenu ? (
                        <div>
                             <button 
                                onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                                className={cn(
                                    'flex items-center justify-between w-full text-base font-medium py-2 border-b border-slate-50',
                                    location.pathname.startsWith(link.path) ? 'text-primary' : 'text-slate-600'
                                )}
                             >
                                {link.name}
                                <ChevronDown size={16} className={cn("transition-transform", activeSubmenu === link.name ? "rotate-180" : "")} />
                             </button>
                             <AnimatePresence>
                                {activeSubmenu === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="pl-4 bg-slate-50/50"
                                    >
                                        {services.map(service => (
                                            <Link 
                                                key={service.id} 
                                                to={`/servicios/${service.id}`}
                                                className="block py-3 text-sm text-slate-500 hover:text-primary border-b border-slate-100 last:border-0 cursor-pointer"
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                             </AnimatePresence>
                        </div>
                    ) : (
                        <Link
                            to={link.path}
                            className={cn(
                            'block text-base font-medium py-2 border-b border-slate-50',
                            location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                            )}
                        >
                            {link.name}
                        </Link>
                    )}
                </div>
              ))}
              <Link to="/contacto" className="w-full mt-2">
                <Button className="w-full">Contáctanos</Button>
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
