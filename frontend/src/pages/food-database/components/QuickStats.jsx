import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = ({ totalFoods, filteredCount, searchQuery }) => {
  const stats = [
    {
      label: 'Total Foods',
      value: totalFoods,
      icon: 'Database',
      color: 'text-primary bg-primary/10'
    },
    {
      label: 'Traditional Recipes',
      value: Math.floor(totalFoods * 0.7),
      icon: 'Crown',
      color: 'text-accent bg-accent/10'
    },
    {
      label: 'Regional Varieties',
      value: 9,
      icon: 'MapPin',
      color: 'text-secondary bg-secondary/10'
    },
    {
      label: 'Health Categories',
      value: 8,
      icon: 'Heart',
      color: 'text-success bg-success/10'
    }
  ];

  return (
    <div className="mb-6">
      {/* Search Results Info */}
      {searchQuery && (
        <div className="mb-4 p-4 bg-primary/5 border border-primary/10 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Search" size={16} className="text-primary" />
            <span className="text-sm text-foreground">
              Found <strong>{filteredCount}</strong> results for "{searchQuery}"
            </span>
          </div>
        </div>
      )}
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-card border border-border rounded-lg heritage-shadow organic-transition hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${stat?.color}`}>
                <Icon name={stat?.icon} size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;