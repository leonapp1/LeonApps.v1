import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Selecciona tu plan',
    description: 'Elige el plan que mejor se ajuste a tus necesidades.'
  },
  {
    number: 2,
    title: 'Reunión inicial',
    description: 'Nos contactamos contigo para conocer más sobre tu proyecto y definir objetivos.'
  },
  {
    number: 3,
    title: 'Desarrollo del proyecto',
    description: 'Trabajamos en la creación de tu solución con actualizaciones regulares.'
  },
  {
    number: 4,
    title: 'Revisión y ajustes',
    description: 'Te presentamos el resultado final y realizamos los ajustes necesarios.'
  },
  {
    number: 5,
    title: 'Entrega Final',
    description: 'Recibe tu proyecto listo para usar, junto con el soporte que necesites.'
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
           >
              {/* Image Placeholder - A person pointing up as in the design */}
              <div className="relative z-10 rounded-2xl overflow-hidden bg-blue-100 aspect-[4/5] flex items-center justify-center">
                 <span className="text-blue-400 font-bold text-xl">Imagen Persona Feliz</span>
              </div>
              <div className="absolute top-10 -left-10 w-20 h-20 bg-yellow-200 rounded-full blur-xl -z-10" />
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-xl -z-10" />
           </motion.div>

           <div>
             <Typography variant="small" className="font-bold text-primary uppercase tracking-wider mb-2 block">
                Proceso de contratación
             </Typography>
             <Typography variant="h2" className="mb-4">
                Un proceso simple, claro y eficiente
             </Typography>
             <Typography variant="body" className="mb-12 text-slate-600">
                Para llevar tu proyecto al siguiente nivel de la manera más fluida posible.
             </Typography>

             <div className="space-y-8">
               {steps.map((step, index) => (
                 <motion.div
                   key={step.number}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex gap-6"
                 >
                   <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-primary font-bold text-xl rounded-lg flex items-center justify-center shadow-sm">
                     {step.number}
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                     <p className="text-slate-600 leading-relaxed">{step.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>
      </Container>
    </section>
  );
};
