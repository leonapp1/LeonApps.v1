import React, { useState } from 'react';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { ProjectCard } from '../components/molecules/ProjectCard';
import { ContactSection } from '../components/organisms/ContactSection';
import { ClientsLogos } from '../components/organisms/ClientsLogos';
import { projects } from '../data/projects';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Todos', 'Desarrollo Web', 'Diseño Gráfico', 'Marketing y Publicidad', 'Software de Cotización'];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <div className="bg-slate-900 pt-32 pb-20 text-center text-white">
        <Container>
           <Typography variant="h1" className="text-white mb-6">Nuestros proyectos más populares</Typography>
           <Typography variant="body" className="text-slate-400 max-w-2xl mx-auto">
              Cada proyecto refleja nuestra pasión y compromiso por la excelencia. Descubre cómo ayudamos a nuestros clientes a crecer.
           </Typography>
        </Container>
      </div>

      <section className="py-20 bg-slate-50">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  filter === category 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             <AnimatePresence>
               {filteredProjects.map((project) => (
                 <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                 >
                   <ProjectCard 
                      title={project.title}
                      description={project.shortDescription}
                      tags={project.tags}
                      image={project.heroImages[0]}
                      link={`/proyectos/${project.id}`}
                   />
                 </motion.div>
               ))}
             </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Typography variant="h4" className="text-slate-400">No se encontraron proyectos en esta categoría.</Typography>
            </div>
          )}
        </Container>
      </section>

      <ClientsLogos />
      <ContactSection />
    </>
  );
};
