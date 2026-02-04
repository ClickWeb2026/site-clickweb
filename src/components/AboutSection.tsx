import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award } from 'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:w-1/2">

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Equipe Click Web trabalhando"
                className="relative rounded-2xl shadow-2xl z-10 w-full" />

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Experiência
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      Foco em Resultados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:w-1/2">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Sobre a <span className="text-blue-600">Click Web</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Somos uma agência digital focada em ajudar empresas a crescerem no
              ambiente online. Entendemos que cada negócio é único, por isso
              desenvolvemos estratégias personalizadas que unem design de alto
              nível e inteligência de mercado.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nossa missão é transformar sua presença digital em uma poderosa
              ferramenta de vendas e relacionamento com clientes, seja através
              de um site profissional ou de uma gestão estratégica de redes
              sociais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <Target className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="font-bold text-slate-900">Estratégia</h3>
                <p className="text-sm text-slate-500">Foco no seu objetivo</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <Rocket className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-slate-900">Crescimento</h3>
                <p className="text-sm text-slate-500">Escala previsível</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <Users className="w-8 h-8 text-blue-800 mb-3" />
                <h3 className="font-bold text-slate-900">Parceria</h3>
                <p className="text-sm text-slate-500">Atendimento próximo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}