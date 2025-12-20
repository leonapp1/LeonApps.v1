import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <Container className="mb-12">
         <div className="flex justify-between items-end">
             <div>
                <Typography variant="small" className="font-bold text-primary uppercase tracking-wider mb-2 block">
                    Portafolio
                </Typography>
                <Typography variant="h2">
                    Proyectos Destacados
                </Typography>
             </div>
             <Link to="/proyectos" className="text-primary font-semibold hover:underline hidden sm:block">
                 Ver todos los proyectos
             </Link>
         </div>
      </Container>

      {/* Infinite Slider */}
      <div className="flex w-full overflow-hidden pause-on-hover">
         <div className="flex gap-8 px-4 animate-scroll">
            {[...projects, ...projects].map((project, index) => (
                <Link 
                    to={`/proyectos/${project.id}`}
                    key={`${project.id}-${index}`} 
                    className="relative flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                >
                    <img 
                        src={project.heroImages[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1 block">
                            {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="text-white" />
                    </div>
                </Link>
            ))}
         </div>
      </div>

      <Container className="mt-8 sm:hidden text-center">
        <Link to="/proyectos" className="text-primary font-semibold hover:underline">
            Ver todos los proyectos
        </Link>
      </Container>
    </section>
  );
};
