import React from 'react';
import { cn } from '../../utils/cn';

export const Container = ({
  fluid = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full',
        !fluid && 'max-w-7xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
