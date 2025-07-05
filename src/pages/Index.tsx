import React from 'react';
import AppLayout from '@/components/AppLayout';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import WhySection from '@/components/WhySection';
import TrustSection from '@/components/TrustSection';
import GettingStartedSection from '@/components/GettingStartedSection';

const Index: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
      <CategoriesSection />
      <WhySection />
      <TrustSection />
      <GettingStartedSection />
    </AppLayout>
  );
};

export default Index;