import React from 'react';
import AppLayout from '@/components/AppLayout';
import FeaturedSection from '@/components/marketplace/FeaturedSection';
import ListingsSection from '@/components/marketplace/ListingsSection';

const Marketplace: React.FC = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Decentralized Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover and purchase compute power and hardware from trusted providers worldwide
            </p>
          </div>
        </section>

        {/* Featured Section */}
        <FeaturedSection />

        {/* Listings Section */}
        <ListingsSection />
      </div>
    </AppLayout>
  );
};

export default Marketplace;