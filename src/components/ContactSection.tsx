import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-blue-900 text-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 skew-x-12 transform origin-top"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
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
              duration: 0.6
            }}>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vamos impulsionar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Entre em contato agora mesmo e solicite um orçamento sem
              compromisso. Estamos prontos para atender você.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <a
              href="https://wa.me/5511967140648"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto">

              <Button
                size="lg"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30"
                leftIcon={<MessageCircle className="w-5 h-5" />}>

                Chamar no WhatsApp
              </Button>
            </a>

            <a
              href="https://instagram.com/clickweb1_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto">

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                leftIcon={<Instagram className="w-5 h-5" />}>

                Seguir no Instagram
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-200">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span>(11) 96714-0648</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <span>@clickweb1_</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}