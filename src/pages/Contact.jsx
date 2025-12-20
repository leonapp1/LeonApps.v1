import React from 'react';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { ContactSection } from '../components/organisms/ContactSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => (
  <>
    <div className="bg-slate-900 py-20 text-white">
       <Container>
          <div className="text-center max-w-2xl mx-auto">
             <Typography variant="h1" className="text-white mb-6">Contáctanos</Typography>
             <Typography variant="body" className="text-slate-400">
                Estamos aquí para responder tus dudas y ayudarte a iniciar tu próximo gran proyecto.
             </Typography>
          </div>
       </Container>
    </div>

    <section className="py-20 bg-white">
       <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
             <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Phone />
                </div>
                <h3 className="font-bold text-lg mb-2">Llámanos</h3>
                <p className="text-slate-600">+51 987 654 321</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Mail />
                </div>
                <h3 className="font-bold text-lg mb-2">Escríbenos</h3>
                <p className="text-slate-600">contacto@leonapps.com</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                   <MapPin />
                </div>
                <h3 className="font-bold text-lg mb-2">Visítanos</h3>
                <p className="text-slate-600">Ayacucho, Perú</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Clock />
                </div>
                <h3 className="font-bold text-lg mb-2">Horario</h3>
                <p className="text-slate-600">Lun - Vie: 9am - 6pm</p>
             </div>
          </div>
       </Container>
    </section>

    <ContactSection />
  </>
);
