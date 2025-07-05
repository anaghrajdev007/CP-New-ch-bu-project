import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ListingCard from './ListingCard';

interface FeaturedItem {
  id: number;
  title: string;
  provider: string;
  price: string;
  originalPrice?: string;
  rating: number;
  category: string;
  description: string;
  image: string;
  discount?: string;
  inStock: boolean;
  tags: string[];
  type: 'compute' | 'hardware';
}

const FeaturedSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'compute' | 'hardware'>('all');
  const [items, setItems] = useState<FeaturedItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const allItems: FeaturedItem[] = [
    {
      id: 1,
      title: "NVIDIA RTX 4090 GPU",
      provider: "TechProvider",
      price: "$1,599",
      originalPrice: "$1,799",
      rating: 4.9,
      category: "Graphics Card",
      description: "High-performance GPU for AI training and gaming",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
      discount: "11%",
      inStock: true,
      tags: ["AI", "Gaming", "24GB VRAM"],
      type: "hardware"
    },
    {
      id: 2,
      title: "Cloud GPU Cluster",
      provider: "CloudCompute",
      price: "$2.50/hour",
      rating: 4.8,
      category: "Compute",
      description: "Scalable GPU cluster for machine learning",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
      inStock: true,
      tags: ["Scalable", "ML", "A100"],
      type: "compute"
    },
    {
      id: 3,
      title: "Edge Computing Node",
      provider: "EdgeTech",
      price: "$299",
      rating: 4.7,
      category: "Edge Device",
      description: "Compact edge computing solution",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      inStock: true,
      tags: ["IoT", "Edge", "ARM"],
      type: "hardware"
    }
  ];

  useEffect(() => {
    loadItems();
  }, [filter]);

  const loadItems = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = filter === 'all' ? allItems : allItems.filter(item => item.type === filter);
      setItems(filtered);
      setLoading(false);
    }, 500);
  };

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const moreItems = [...items, ...allItems.slice(0, 2)];
      setItems(moreItems);
      setLoading(false);
      if (moreItems.length >= 10) setHasMore(false);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000 && hasMore && !loading) {
        loadMore();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Resources</h2>
          <div className="flex gap-2">
            <Button 
              variant={filter === 'compute' ? 'default' : 'outline'}
              onClick={() => setFilter('compute')}
            >
              Compute
            </Button>
            <Button 
              variant={filter === 'hardware' ? 'default' : 'outline'}
              onClick={() => setFilter('hardware')}
            >
              Hardware
            </Button>
            <Button variant="outline">View All</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ListingCard key={`${item.id}-${Math.random()}`} {...item} />
          ))}
        </div>
        
        {loading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;