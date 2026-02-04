import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              Especialistas em Presença Digital
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Sua empresa mais <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                profissional na internet
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Criamos sites modernos e gerenciamos seu Instagram para você
              vender mais, conquistar novos clientes e se destacar da
              concorrência.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Button
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-100 hover:bg-blue-800/50 hover:text-white"
              onClick={() =>
              document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              Ver Nossos Trabalhos
            </Button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-blue-200">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
              <span>Sites Otimizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
              <span>Design Exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
              <span>Suporte Dedicado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}