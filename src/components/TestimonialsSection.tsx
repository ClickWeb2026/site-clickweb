import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
const testimonials = [
{
  id: 1,
  name: 'Vanesa',
  role: 'Proprietária',
  company: 'Vet Leste - Clínica Veterinária',
  rating: 5,
  text: 'O site ficou sensacional!!! Você deixou muito mais didático, claro e objetivo!!! Muito, muito obrigada!!! Que Deus te abençoe!!!'
}];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que nossos <span className="text-blue-600">clientes</span> dizem
          </h2>
          <p className="text-lg text-slate-600">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja o que
            eles têm a dizer sobre nosso trabalho.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
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
              duration: 0.6,
              delay: index * 0.2
            }}
            className="relative bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">

              {/* Quote icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star
                key={i}
                className="w-5 h-5 fill-orange-400 text-orange-400" />

              )}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-50 to-transparent rounded-br-2xl -z-10"></div>
            </motion.div>
          )}
        </div>

        {/* Trust indicator */}
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
          className="mt-12 text-center">

          <p className="text-slate-500 text-sm">
            Junte-se aos nossos clientes satisfeitos e transforme sua presença
            digital
          </p>
        </motion.div>
      </div>
    </section>);

}