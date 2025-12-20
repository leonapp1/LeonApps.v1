import React, { useState } from 'react';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { PricingCard } from '../components/molecules/PricingCard';
import { ProcessTimeline } from '../components/organisms/ProcessTimeline';
import { ContactSection } from '../components/organisms/ContactSection';
import { PromoBanner } from '../components/organisms/PromoBanner';
import { plansData } from '../data/plans';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

export const Plans: React.FC = () => {
  const [activeTab, setActiveTab] = useState(plansData[0].id);

  const activeService = plansData.find(service => service.id === activeTab) || plansData[0];

  return (
    <>
      <div className="bg-white py-20">
        <Container>
           <div className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h1" className="mb-6">
                Elige el plan que mejor se adapte a tus necesidades
              </Typography>
              <Typography variant="body" className="text-slate-600">
                 Ofrecemos diferentes opciones para ayudarte a dar el siguiente paso en tu proyecto. Selecciona el servicio que te interesa para ver los planes disponibles.
              </Typography>
           </div>
  
           {/* Service Tabs */}
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-slate-200">
               {plansData.map((service) => (
                   <button
                       key={service.id}
                       onClick={() => setActiveTab(service.id)}
                       className={cn(
                           "pb-4 border-b-2 text-sm md:text-base font-medium transition-all duration-300 px-2",
                           activeTab === service.id 
                               ? `border-service-${service.color} text-service-${service.color} font-bold`
                               : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                       )}
                   >
                       {service.serviceName}
                   </button>
               ))}
           </div>
  
           <div className="min-h-[600px]">
             <AnimatePresence mode="wait">
                 <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                 >
                    {activeService.plans.map((plan, idx) => (
                       <PricingCard 
                            key={idx} 
                            {...plan} 
                            colorType={activeService.color}
                        />
                    ))}
                 </motion.div>
             </AnimatePresence>
           </div>
        </Container>
      </div>
  
      <ProcessTimeline />
      <PromoBanner />
      <ContactSection />
    </>
  );
};
