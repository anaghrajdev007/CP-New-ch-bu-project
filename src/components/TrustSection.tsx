import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheckIcon, UsersIcon, AwardIcon, TrendingUpIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trust & Security at Our Core
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built with enterprise-grade security and backed by industry veterans with decades of experience.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-2 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Every transaction protected by blockchain technology and smart contracts
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Verified Sellers</h3>
              <p className="text-sm text-muted-foreground">
                All sellers undergo thorough verification and reputation tracking
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <AwardIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous quality checks and community-driven reviews
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <TrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">
                Thousands of successful transactions and growing daily
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Credentials */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Backed by Global Veterans
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our founder and advisory team bring an average of 20+ years of professional experience 
              in leading technological and business transformations for some of the world's leading enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Years Average Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Enterprise Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$1B+</div>
              <div className="text-sm text-muted-foreground">In Managed Projects</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl"
              >
                Learn More About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;