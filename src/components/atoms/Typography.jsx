import React from 'react';
import { cn } from '../../utils/cn';

const variants = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight text-slate-900',
  h3: 'text-2xl md:text-3xl font-bold text-slate-900',
  h4: 'text-xl md:text-2xl font-bold text-slate-900',
  h5: 'text-lg md:text-xl font-bold text-slate-900',
  h6: 'text-base font-bold text-slate-900',
  body: 'text-base md:text-lg text-slate-600 leading-relaxed',
  small: 'text-sm text-slate-500',
};

const defaultComponent = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'span',
};

export const Typography = ({
  variant = 'body',
  component,
  className,
  children,
  ...props
}) => {
  const Component = component || defaultComponent[variant];

  return (
    <Component
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
