import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Instagram, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
const services = [
{
  id: 'sites',
  title: 'Criação de Sites Profissionais',
  description:
  'Desenvolvemos sites de alta performance, focados em design, usabilidade e conversão para o seu negócio.',
  icon: Globe,
  features: [
  'Layout moderno e responsivo',
  'Otimizado para Google (SEO)',
  'Alta velocidade de carregamento',
  'Integração com WhatsApp',
  'Painel administrativo fácil'],

  color: 'blue'
},
{
  id: 'instagram',
  title: 'Gestão de Instagram',
  description:
  'Transformamos seu perfil em uma vitrine profissional para atrair seguidores qualificados e gerar vendas.',
  icon: Instagram,
  features: [
  'Estratégia de conteúdo',
  'Design profissional de posts',
  'Gestão de tráfego orgânico',
  'Relatórios de desempenho',
  'Interação com público'],

  color: 'orange'
}];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Soluções completas para sua{' '}
            <span className="text-blue-600">presença digital</span>
          </h2>
          <p className="text-lg text-slate-600">
            Unimos design e estratégia para colocar sua empresa em destaque na
            internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) =>
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-100 transition-all hover:shadow-2xl">

              <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>

                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) =>
              <li key={idx} className="flex items-start gap-3">
                    <div
                  className={`mt-1 rounded-full p-0.5 ${service.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>

                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </li>
              )}
              </ul>

              <Button
              variant={service.color === 'blue' ? 'secondary' : 'primary'}
              className="w-full"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() =>
              window.open('https://wa.me/5511967140648', '_blank')
              }>

                Saiba Mais
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}