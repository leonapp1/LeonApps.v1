import React from 'react';
import { HeroSection } from '../components/organisms/HeroSection';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { ProcessTimeline } from '../components/organisms/ProcessTimeline';
import { PromoBanner } from '../components/organisms/PromoBanner';
import { ClientsLogos } from '../components/organisms/ClientsLogos';
import { ContactSection } from '../components/organisms/ContactSection';
import { Testimonials } from '../components/organisms/Testimonials';
import { FeaturedProjects } from '../components/organisms/FeaturedProjects';

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessTimeline />
      <PromoBanner />
      <Testimonials />
      <ClientsLogos />
      <ContactSection />
    </>
  );
};
