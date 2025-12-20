import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Ríos',
    role: 'CEO, Tienda Virtual Ríos',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Gracias al equipo logramos modernizar nuestra tienda online. El diseño es atractivo, la navegación es intuitiva y hemos visto un aumento del 30% en nuestras ventas desde el lanzamiento.',
    rating: 5
  },
  {
    name: 'María López',
    role: 'Directora, Agencia Creativa López',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Confié en ellos para el diseño de mi branding y los resultados superaron mis expectativas. La atención al detalle y la creatividad que aportaron fueron increíbles. ¡100% recomendados!',
    rating: 5
  },
  {
    name: 'Pedro García',
    role: 'Gerente, Eventos García',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'La estrategia de marketing digital que desarrollaron para nuestra empresa fue un éxito. Alcanzamos más clientes en menos tiempo y nuestras redes sociales nunca habían estado tan activas.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
           <Typography variant="small" className="font-bold text-primary uppercase tracking-wider mb-2 block">
             Testimonios
           </Typography>
           <Typography variant="h2" className="mb-4">
             Lo que dicen nuestros clientes
           </Typography>
           <Typography variant="body" className="text-slate-600">
             La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
           </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((testimonial, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
             >
               <div className="flex gap-1 text-yellow-400 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} size={16} fill="currentColor" />
                 ))}
               </div>
               <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
               <div className="flex items-center gap-4">
                 <img 
                   src={testimonial.image} 
                   alt={testimonial.name} 
                   className="w-12 h-12 rounded-full object-cover"
                 />
                 <div>
                   <h5 className="font-bold text-slate-900 text-sm">{testimonial.name}</h5>
                   <p className="text-xs text-slate-500">{testimonial.role}</p>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </Container>
    </section>
  );
};
