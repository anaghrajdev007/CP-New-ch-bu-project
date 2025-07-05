import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, MapPin, Award } from 'lucide-react';

const TeamSection: React.FC = () => {
  const advisors = [
    { name: "Nathaniel", role: "Product", country: "USA", flag: "🇺🇸", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616598870_2a80e99b.jpg", bio: "Product strategy expert with 15+ years in tech innovation and user experience design." },
    { name: "Ronald", role: "Founder & Biz Leader", country: "Spain", flag: "🇪🇸", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616599593_9ec2176c.jpg", bio: "Visionary entrepreneur with 20+ years building scalable tech companies and leading global teams." },
    { name: "Cole", role: "Founder & Product Lead", country: "USA", flag: "🇺🇸", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616593690_b2df9811.jpg", bio: "Product visionary with expertise in user-centric design and marketplace platform development." },
    { name: "Evan", role: "Marketing", country: "USA", flag: "🇺🇸", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616595497_7e140b13.jpeg", bio: "Business development leader focused on partnership growth and market penetration strategies." },
    { name: "Martijn", role: "General Counsel", country: "Netherlands", flag: "🇳🇱", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616598124_3325b3c9.jpeg", bio: "Legal expert in technology law, regulatory compliance, and international business structures." }
  ];

  const founders = [
    
    { name: "Jerry", role: "Solution", country: "Costa Rica", flag: "🇨🇷", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616596653_77055cad.jpg", bio: "Solution architect specializing in scalable distributed systems and blockchain infrastructure." },
    { name: "Yoonil", role: "Founder & Tech Lead", country: "S. Korea", flag: "🇰🇷", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616600284_9bc4c40c.jpg", bio: "Technical innovator specializing in distributed computing, AI systems, and blockchain architecture." },
    { name: "Manas", role: "Strategy", country: "India", flag: "🇮🇳", image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751616597371_d6b2cbb1.jpg", bio: "Strategic advisor with deep expertise in global market expansion and business development." },
    
  ];

  const TeamCard = ({ member, isFounder }: { member: any; isFounder?: boolean }) => (
    <Card className="group relative h-80 w-full [perspective:1000px] hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-card to-card/80 rounded-lg border border-border/50">
          <CardHeader className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 ring-2 ring-primary/10">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 right-4 text-2xl">{member.flag}</div>
            <CardTitle className="text-lg">{member.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline" className="text-xs">{member.country}</Badge>
            </div>
            <Button variant="ghost" size="sm" className="w-full">
              <Linkedin className="h-4 w-4 mr-2 text-blue-600" />
              LinkedIn
            </Button>
            {isFounder && (
              <div className="flex items-center justify-center space-x-1 text-xs text-primary">
                <Award className="h-3 w-3" />
                <span>Founder</span>
              </div>
            )}
          </CardContent>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20 p-6 flex flex-col justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">{member.flag}</span>
              <Badge variant="outline" className="text-xs">{member.country}</Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="team" className="py-16 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            The Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Bringing together the brightest global sparks and technocrats.
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 max-w-2xl mx-auto border border-blue-200 dark:border-blue-800">
            <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
              Spread across 5 nations & 3 continents.<br />
              20+ years average professional experience of each member.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Advisors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {advisors.map((advisor, index) => (
              <TeamCard key={index} member={advisor} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Founders</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <TeamCard key={index} member={founder} isFounder={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;