import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';

const clients = [
  'MMJ Smart Electronics',
  'MMJ Smart Electronics 2',
  'Constructora Torralpa',
  'Eventos Garcia',
  'EasyEnglish TV',
  'EasyEnglish TV 2',
];

export const ClientsLogos: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
           <Typography variant="h3" className="text-slate-800">Algunos de nuestros clientes</Typography>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {clients.map((client, index) => (
             <div key={index} className="h-12 bg-slate-100 rounded px-6 flex items-center border border-slate-200">
                <span className="font-bold text-slate-400">{client}</span>
             </div>
           ))}
        </div>
      </Container>
    </section>
  );
};
