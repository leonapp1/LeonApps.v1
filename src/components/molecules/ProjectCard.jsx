import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:shadow-xl"
    >
      <div className="aspect-video bg-slate-200 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 font-medium group-hover:scale-105 transition-transform duration-500">
             Project Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute top-4 right-4">
           <Link to={link}>
             <button className="bg-white/20 backdrop-blur hover:bg-white text-white hover:text-primary p-2 rounded-full transition-colors">
               <ArrowUpRight size={20} />
             </button>
           </Link>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Typography variant="h4" className="mb-2 group-hover:text-primary transition-colors">
          {title}
        </Typography>
        <Typography variant="body" className="text-sm text-slate-500 mb-6 line-clamp-2">
          {description}
        </Typography>
        
        <Link to={link}>
          <Button variant="outline" size="sm" className="w-full">Ver Proyecto</Button>
        </Link>
      </div>
    </motion.div>
  );
};
