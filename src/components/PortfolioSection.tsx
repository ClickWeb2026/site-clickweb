import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
const projects = [
{
  id: 1,
  title: 'Vet Leste - Clínica Veterinária',
  category: 'Site Profissional',
  image: "/pasted-image.webp",

  url: 'https://www.vetleste.com'
}];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Trabalhos Recentes
            </h2>
            <p className="text-lg text-slate-600">
              Confira alguns dos projetos que desenvolvemos e resultados que
              entregamos para nossos clientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) =>
          <motion.a
            key={project.id}
            href={project.url || '#'}
            target={project.url ? '_blank' : undefined}
            rel={project.url ? 'noopener noreferrer' : undefined}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl active:shadow-lg transition-all cursor-pointer block w-full">

              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.id === 1 ? 'object-contain p-4' : 'object-cover'}`} />

              </div>

              {/* Overlay - sempre visível no mobile, hover no desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <span className="text-orange-400 font-medium text-sm mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <div className="mt-2 md:mt-4">
                  <span className="inline-flex items-center text-white text-sm font-medium bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                    {project.url ? 'Visitar site' : 'Ver projeto'}{' '}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}