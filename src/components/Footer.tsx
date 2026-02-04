import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">

              <span className="text-white">Click</span>
              <span className="text-orange-500">Web</span>
            </a>
            <p className="text-sm mb-4">
              Transformando negócios através de estratégias digitais
              inteligentes e design profissional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Gestão de Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Lojas Virtuais
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors">

                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-orange-500 transition-colors">

                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors">

                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li>Segunda a Sexta</li>
              <li>09:00 às 18:00</li>
              <li className="pt-2 text-white font-medium">(11) 96714-0648</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Click Web. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>);

}