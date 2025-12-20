import React from 'react';
import { cn } from '../../utils/cn';
import LogoLA from "../../../public/logoLA.svg"

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <img src={LogoLA} alt="Logo LeonApps" className="h-12" />
    </div>
  );
};
