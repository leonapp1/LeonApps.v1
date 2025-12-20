import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { ServiceCard } from '../molecules/ServiceCard';
import { services } from '../../data/services';

const getColorType = (id) => {
  switch(id) {
    case 'desarrollo-web': return 'web';
    case 'diseno-grafico': return 'design';
    case 'marketing-publicidad': return 'marketing';
    case 'software-cotizacion': return 'software';
    default: return 'web';
  }
};

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Typography variant="small" className="font-bold text-primary uppercase tracking-wider mb-2 block">
            Nuestros Servicios
          </Typography>
          <Typography variant="h2" className="mb-4">
            Todo lo que necesitas para destacar en el mundo digital
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
                key={index} 
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                link={`/servicios/${service.id}`}
                colorType={getColorType(service.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
