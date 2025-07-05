import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { FilterIcon } from 'lucide-react';

interface MarketplaceFiltersProps {
  onFilterChange: (filters: any) => void;
}

const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedChains, setSelectedChains] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const hardwareCategories = [
    { id: 'all-hardware', label: 'All Hardware' },
    { id: 'graphics-cards', label: 'Graphics Cards' },
    { id: 'processors', label: 'Processors' },
    { id: 'memory', label: 'Memory & Storage' },
    { id: 'asic-miners', label: 'ASIC Miners' },
    { id: 'quantum-units', label: 'Quantum Units' },
    { id: 'edge-devices', label: 'Edge Devices' }
  ];

  const softwareCategories = [
    { id: 'all-software', label: 'All Software' },
    { id: 'ml-models', label: 'ML Models' },
    { id: 'ai-agents', label: 'AI Agents' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'dev-tools', label: 'Dev Tools' },
    { id: 'apis', label: 'APIs' },
    { id: 'frameworks', label: 'Frameworks' }
  ];

  const blockchainFilters = [
    { id: 'all-chains', label: 'All Chains' },
    { id: 'cardano', label: 'Cardano (ADA)' },
    { id: 'polygon', label: 'Polygon (MATIC)' },
    { id: 'ethereum', label: 'Ethereum (ETH)' },
    { id: 'solana', label: 'Solana (SOL)' },
    { id: 'bitcoin', label: 'Bitcoin (BTC)' }
  ];

  const priceRanges = [
    { id: 'under-500', label: 'Under $500' },
    { id: '500-1000', label: '$500 - $1,000' },
    { id: '1000-5000', label: '$1,000 - $5,000' },
    { id: '5000-10000', label: '$5,000 - $10,000' },
    { id: 'over-10000', label: 'Over $10,000' }
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter(id => id !== categoryId);
    setSelectedCategories(updated);
    onFilterChange({ categories: updated, chains: selectedChains, prices: selectedPrices });
  };

  const handleChainChange = (chainId: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedChains, chainId]
      : selectedChains.filter(id => id !== chainId);
    setSelectedChains(updated);
    onFilterChange({ categories: selectedCategories, chains: updated, prices: selectedPrices });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FilterIcon className="h-5 w-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Hardware Categories */}
        <div>
          <h3 className="font-semibold mb-3">Hardware Categories</h3>
          <div className="space-y-2">
            {hardwareCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                />
                <label htmlFor={category.id} className="text-sm cursor-pointer">
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Software Categories */}
        <div>
          <h3 className="font-semibold mb-3">Software Categories</h3>
          <div className="space-y-2">
            {softwareCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                />
                <label htmlFor={category.id} className="text-sm cursor-pointer">
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain */}
        <div>
          <h3 className="font-semibold mb-3">Blockchain</h3>
          <div className="space-y-2">
            {blockchainFilters.map((filter) => (
              <div key={filter.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={filter.id}
                  checked={selectedChains.includes(filter.id)}
                  onCheckedChange={(checked) => handleChainChange(filter.id, checked as boolean)}
                />
                <label htmlFor={filter.id} className="text-sm cursor-pointer">
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <div key={range.id} className="flex items-center space-x-2">
                <Checkbox id={range.id} />
                <label htmlFor={range.id} className="text-sm cursor-pointer">
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="font-semibold mb-3">Availability</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock Only
            </label>
          </div>
        </div>

        {/* Seller Status */}
        <div>
          <h3 className="font-semibold mb-3">Seller Status</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="verified" />
            <label htmlFor="verified" className="text-sm cursor-pointer">
              Verified Sellers Only
            </label>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default MarketplaceFilters;