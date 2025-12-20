import React from 'react';
import { cn } from '../../utils/cn';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-2xl tracking-tighter", className)}>
      <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-lg">
        LA
      </div>
      <span className="text-slate-900">Leon<span className="text-primary">Apps</span></span>
    </div>
  );
};
