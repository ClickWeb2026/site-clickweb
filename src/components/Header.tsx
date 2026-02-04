import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Serviços',
    href: '#services'
  },
  {
    name: 'Portfólio',
    href: '#portfolio'
  },
  {
    name: 'Sobre',
    href: '#about'
  },
  {
    name: 'Contato',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter flex items-center gap-2">

          <span className="text-blue-800">Click</span>
          <span className="text-orange-500">Web</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-orange-500 ${
            isScrolled ? 'text-slate-600' : 'text-slate-800' // Darker text on transparent for visibility if hero is light, but hero is blue.
            // Actually hero is blue gradient, so text should be white on transparent.
            // Let's adjust:
            } ${!isScrolled && 'text-white'}`}>

              {link.name}
            </a>
          )}
          <Button
            variant={isScrolled ? 'primary' : 'primary'}
            size="sm"
            onClick={() => window.location.href = '#contact'}>

            Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu">

          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            x: '100%'
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: '100%'
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className="fixed inset-0 z-50 bg-white md:hidden flex flex-col">

            <div className="p-4 flex justify-between items-center border-b">
              <span className="text-2xl font-bold text-blue-800">
                Click<span className="text-orange-500">Web</span>
              </span>
              <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-600"
              aria-label="Close menu">

                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-slate-800 hover:text-orange-500">

                  {link.name}
                </a>
            )}
              <div className="mt-auto">
                <Button
                className="w-full justify-center"
                size="lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '#contact';
                }}>

                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}