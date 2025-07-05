import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <SparklesIcon className="h-4 w-4" />
          <span>Decentralized AI Marketplace</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
          Power your AI with the World's First
          <span className="block text-blue-600 dark:text-blue-400">Decentralized Compute Marketplace</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Discover top-tier decentralized hardware and software from globally trusted providers. 
          Transact securely with crypto or fiat and join our vibrant community of innovators 
          shaping the future of AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/marketplace">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Marketplace
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/buyers-guide">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-muted transition-all duration-300"
            >
              Buyers Guide
            </Button>
          </Link>
          
          <Link to="/sellers-guide">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-muted transition-all duration-300"
            >
              Sellers Guide
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12,456</div>
            <div className="text-sm text-muted-foreground">Active Listings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">8,234</div>
            <div className="text-sm text-muted-foreground">Global Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$2.4M</div>
            <div className="text-sm text-muted-foreground">Total Volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;