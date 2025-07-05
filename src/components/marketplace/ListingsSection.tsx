import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import ListingCard from './ListingCard';
import MarketplaceFilters from './MarketplaceFilters';

const ListingsSection: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allListings = [
    {
      id: 1,
      title: 'NVIDIA RTX 4090 AI Training Kit',
      provider: 'TechFlow Labs',
      price: '$749',
      originalPrice: '$2,449',
      rating: 4.9,
      category: 'Hardware',
      description: 'Professional-grade GPU optimized for AI training and inference...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751280332849_8593ba18.png',
      discount: '70%',
      inStock: true,
      tags: ['AI Training', 'Deep Learning', 'CUDA', '+1']
    },
    {
      id: 2,
      title: 'AutoGPT Business Suite',
      provider: 'AI Dynamics',
      price: '$179',
      originalPrice: '$799',
      rating: 4.7,
      category: 'Software',
      description: 'Complete autonomous AI agent software for business automation...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751280332849_8593ba18.png',
      discount: '70%',
      inStock: true,
      tags: ['Automation', 'Business', 'API', '+1']
    },
    {
      id: 3,
      title: 'Custom Vision Training Platform',
      provider: 'VisionAI Corp',
      price: '$299',
      originalPrice: null,
      rating: 4.8,
      category: 'Software',
      description: 'No-code computer vision model training platform with drag-and...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751280332849_8593ba18.png',
      discount: null,
      inStock: true,
      tags: ['Computer Vision', 'No-Code', 'Training', '+1']
    },
    {
      id: 4,
      title: 'Quantum-AI Hybrid Processing Unit',
      provider: 'Quantum Dynamics',
      price: '$15,999',
      originalPrice: null,
      rating: 4.9,
      category: 'Hardware',
      description: 'Revolutionary quantum-classical hybrid processor designed for next...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751280332849_8593ba18.png',
      discount: null,
      inStock: false,
      tags: ['Quantum Computing', 'Hybrid', 'Research', '+1']
    },
    {
      id: 5,
      title: 'Edge AI Optimization Toolkit',
      provider: 'EdgeTech Solutions',
      price: '$239',
      originalPrice: '$799',
      rating: 4.6,
      category: 'Software',
      description: 'Complete software suite for optimizing AI models for edge...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751280332849_8593ba18.png',
      discount: '70%',
      inStock: true,
      tags: ['Edge AI', 'Mobile', 'Optimization', '+1']
    },
    {
      id: 6,
      title: 'ASIC Miner Pro Max',
      provider: 'CryptoMining Systems',
      price: '$3,299',
      originalPrice: null,
      rating: 4.5,
      category: 'Hardware',
      description: 'High-efficiency ASIC miner optimized for cryptocurrency mining...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1751280332849_8593ba18.png',
      discount: null,
      inStock: true,
      tags: ['Mining', 'Cryptocurrency', 'High Efficiency', '+1']
    }
  ];

  const totalPages = Math.ceil(allListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentListings = allListings.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">All Products</h2>
            <p className="text-muted-foreground">{allListings.length} products found</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              Filters
            </Button>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <MarketplaceFilters onFilterChange={() => {}} />
          </div>

          {/* Listings Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentListings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;