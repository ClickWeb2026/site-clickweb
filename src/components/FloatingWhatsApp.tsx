import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5511967140648"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 1,
        type: 'spring'
      }}
      whileHover={{
        scale: 1.05
      }}>

      <span className="bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Fale Conosco
      </span>
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 text-white relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
        <MessageCircle className="w-8 h-8" />
      </div>
    </motion.a>);

}