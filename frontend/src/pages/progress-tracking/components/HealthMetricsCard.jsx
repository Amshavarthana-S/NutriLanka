import React from 'react';
import Icon from '../../../components/AppIcon';

const HealthMetricsCard = ({ metric, value, unit, change, trend, icon, color }) => {
  const getTrendIcon = () => {
    if (trend === 'up') return 'TrendingUp';
    if (trend === 'down') return 'TrendingDown';
    return 'Minus';
  };

  const getTrendColor = () => {
    if (trend === 'up' && change > 0) return 'text-success';
    if (trend === 'down' && change < 0) return 'text-success';
    if (trend === 'up' && change < 0) return 'text-destructive';
    if (trend === 'down' && change > 0) return 'text-destructive';
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 heritage-shadow organic-transition hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          <Icon name={icon} size={24} className="text-white" />
        </div>
        <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
          <Icon name={getTrendIcon()} size={16} />
          <span className="text-sm font-medium">
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-muted-foreground font-inter">
          {metric}
        </h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-foreground font-poppins">
            {value}
          </span>
          <span className="text-sm text-muted-foreground">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HealthMetricsCard;