import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { cn } from '../../utils/cn';

const colorMap = {
  web: {
    bg: 'bg-blue-50',
    text: 'text-service-web',
    hoverBorder: 'hover:border-service-web/30'
  },
  design: {
    bg: 'bg-purple-50',
    text: 'text-service-design',
    hoverBorder: 'hover:border-service-design/30'
  },
  marketing: {
    bg: 'bg-amber-50',
    text: 'text-service-marketing',
    hoverBorder: 'hover:border-service-marketing/30'
  },
  software: {
    bg: 'bg-emerald-50',
    text: 'text-service-software',
    hoverBorder: 'hover:border-service-software/30'
  }
};

export const ServiceCard = ({ 
  title, description, icon: Icon, link, className, colorType = 'web' 
}) => {
  const colors = colorMap[colorType];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white p-8 rounded-2xl shadow-soft border border-slate-100 transition-all hover:shadow-xl",
        colors.hoverBorder,
        className
      )}
    >
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", colors.bg, colors.text)}>
        <Icon size={28} />
      </div>
      <Typography variant="h4" className="mb-3">{title}</Typography>
      <Typography variant="body" className="text-sm text-slate-500 mb-6">
        {description}
      </Typography>
      <Link to={link} className={cn("inline-flex items-center font-semibold hover:underline", colors.text)}>
        Ver detalles <ArrowRight size={16} className="ml-2" />
      </Link>
    </motion.div>
  );
};
