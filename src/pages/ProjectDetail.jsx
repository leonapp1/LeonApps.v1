import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { ContactSection } from '../components/organisms/ContactSection';
import { projects } from '../data/projects';
import { ArrowLeft, ChevronLeft, ChevronRight, Lightbulb, TrendingUp, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/molecules/ProjectCard';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [relatedIndex, setRelatedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.heroImages.length) % project.heroImages.length);
  };

  // Filter related projects by same category (service), excluding current project
  const relatedProjects = projects.filter(p => p.category === project.category && p.id !== id);
  // If not enough related projects, fill with others
  if (relatedProjects.length < 3) {
      const others = projects.filter(p => p.category !== project.category && p.id !== id);
      relatedProjects.push(...others.slice(0, 3 - relatedProjects.length));
  }

  const nextRelated = () => {
      setRelatedIndex((prev) => (prev + 1) % Math.ceil(relatedProjects.length / 3));
  };

  const prevRelated = () => {
      setRelatedIndex((prev) => (prev - 1 + Math.ceil(relatedProjects.length / 3)) % Math.ceil(relatedProjects.length / 3));
  };

  // Mocking more images for gallery to reach 6-7 if needed
  const gallery = [...project.galleryImages];
  while(gallery.length < 7) {
      gallery.push(...project.galleryImages);
  }
  const displayGallery = gallery.slice(0, 7);

  return (
    <>
      <div className="bg-slate-50 pt-32 pb-12">
        <Container>
           {/* Breadcrumb / Back Link */}
           <div className="flex justify-between items-center mb-8">
               <Link to="/proyectos" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Volver a proyectos
                </Link>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">{project.category}</span>
           </div>
           
           <div className="text-center max-w-4xl mx-auto mb-12">
               <Typography variant="h1" className="mb-6">{project.title}</Typography>
               <Typography variant="body" className="text-lg text-slate-600">
                  {project.fullDescription}
               </Typography>
           </div>

           {/* Hero Slider */}
           <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-white group">
              <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImage}
                    src={project.heroImages[currentImage]}
                    alt={`${project.title} slide ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
              </AnimatePresence>
              
              {project.heroImages.length > 1 && (
                  <>
                    <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.heroImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImage(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-6' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                  </>
              )}
           </div>

           <div className="flex justify-center mt-8">
               <Link to="/contacto">
                   <Button size="lg" className="shadow-xl">
                       ¿Quieres resultados como este? <br/> <span className="text-xs font-normal opacity-90 ml-2">Contáctanos</span>
                   </Button>
               </Link>
           </div>
        </Container>
      </div>

      <section className="py-20 bg-blue-50/50">
          <Container>
             <div className="text-center mb-16">
                 <Typography variant="h2" className="text-slate-900">Retos del proyecto</Typography>
                 <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
                     Nos enfrentamos a un reto importante para construir una tienda online intuitiva y visualmente atractiva, optimizada para dispositivos móviles y diseñada para aumentar sus ventas.
                 </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                     <div className="flex items-center gap-3 mb-4 text-red-500">
                         <Search size={24} />
                         <h3 className="font-bold text-lg">Problema Identificado</h3>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                         {project.problem}
                     </p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                     <div className="flex items-center gap-3 mb-4 text-secondary">
                         <Lightbulb size={24} />
                         <h3 className="font-bold text-lg">Solución Implementada</h3>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                         {project.solution}
                     </p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                     <div className="flex items-center gap-3 mb-4 text-primary">
                         <TrendingUp size={24} />
                         <h3 className="font-bold text-lg">Resultados Alcanzados</h3>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                         {project.results}
                     </p>
                 </div>
             </div>
          </Container>
      </section>

      <section className="py-20 bg-white">
          <Container>
             <div className="text-center mb-16">
                 <Typography variant="h2">Galería de resultados</Typography>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 h-[800px]">
                 {displayGallery.map((img, idx) => {
                     // Bento Grid Layout Logic
                     let className = "rounded-2xl overflow-hidden shadow-md relative group";
                     if (idx === 0) className += " md:col-span-2 md:row-span-2";
                     else if (idx === 1) className += " md:col-span-1 md:row-span-1";
                     else if (idx === 2) className += " md:col-span-1 md:row-span-2";
                     else if (idx === 3) className += " md:col-span-1 md:row-span-1";
                     else className += " md:col-span-1 md:row-span-1";

                     return (
                        <motion.div 
                            key={idx} 
                            className={className}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <img 
                                src={img} 
                                alt={`Result ${idx}`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </motion.div>
                     );
                 })}
             </div>

             <div className="flex flex-col items-center mt-16">
                 <p className="text-secondary font-bold mb-4">¿Te gustaría un proyecto igual de impactante?</p>
                 <Link to="/contacto">
                     <Button>Contáctanos</Button>
                 </Link>
             </div>
          </Container>
      </section>

      <section className="py-20 bg-slate-50 relative overflow-hidden">
          <Container>
              <div className="text-center mb-12">
                  <Typography variant="h3">Revisar más proyectos</Typography>
                  <p className="text-slate-500 mt-2">Otros proyectos de <span className="font-bold text-primary">{project.category}</span> que te pueden interesar</p>
              </div>
              
              <div className="relative px-12">
                  <div className="overflow-hidden">
                      <motion.div 
                        className="flex gap-8"
                        animate={{ x: `-${relatedIndex * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                          {relatedProjects.map((p) => (
                              <div key={p.id} className="min-w-full md:min-w-[calc(33.333%-1.33rem)]">
                                  <ProjectCard 
                                    title={p.title}
                                    description={p.shortDescription}
                                    image={p.heroImages[0]}
                                    tags={p.tags.slice(0, 2)}
                                    link={`/proyectos/${p.id}`}
                                  />
                              </div>
                          ))}
                      </motion.div>
                  </div>

                  {relatedProjects.length > 3 && (
                      <>
                        <button 
                            onClick={prevRelated}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextRelated}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
                        >
                            <ChevronRight size={24} />
                        </button>
                      </>
                  )}
              </div>

              <div className="flex justify-center mt-12">
                   <Link to="/proyectos">
                       <Button variant="primary" className="bg-primary-dark">Ver todos los proyectos</Button>
                   </Link>
              </div>
          </Container>
      </section>

      <ContactSection />
    </>
  );
};
