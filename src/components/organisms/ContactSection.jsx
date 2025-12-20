import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export const ContactSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Listos para transformar tu idea en éxito digital
          </Typography>
          <Typography variant="body" className="text-slate-600">
            No importa el tamaño de tu proyecto, estamos aquí para ayudarte a destacar con soluciones creativas y estratégicas.
          </Typography>
        </div>

        <div className="max-w-lg mx-auto bg-white/50 backdrop-blur p-8 rounded-2xl shadow-sm border border-white">
          <form className="space-y-6">
            <Input label="Nombres" placeholder="Ejemplo: Juan Pérez" />
            <Input label="Celular" placeholder="Ejemplo: +51 987 654 321" />
            <Input label="Email" type="email" placeholder="Ejemplo: correo@ejemplo.com" />
            
            <div className="w-full">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Mensaje
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400 transition-all duration-200 min-h-[120px]"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <Button className="w-full" size="lg">
              Solicitar Consultoría Gratuita
            </Button>
            
            <p className="text-center text-xs text-orange-400 mt-4">
              * La primera consulta es completamente gratuita
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};
