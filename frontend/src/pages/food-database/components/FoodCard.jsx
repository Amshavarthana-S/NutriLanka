import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FoodCard = ({ food, onViewDetails, onAddToMealPlan }) => {
  const [isLiked, setIsLiked] = useState(false);

  const getNutritionColor = (level) => {
    switch (level) {
      case 'high': return 'text-success bg-success/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getHealthBenefitIcon = (benefit) => {
    const iconMap = {
      'Heart Health': 'Heart',
      'Weight Management': 'Scale',
      'Diabetes Control': 'Activity',
      'Digestive Health': 'Zap',
      'Energy Boost': 'Battery',
      'Immunity Building': 'Shield',
      'Bone Health': 'Bone',
      'Brain Health': 'Brain'
    };
    return iconMap?.[benefit] || 'Star';
  };

  return (
    <div className="bg-card border border-border rounded-lg heritage-shadow organic-transition hover:shadow-lg group">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={food?.image}
          alt={food?.imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 organic-transition"
        />
        
        {/* Overlay Icons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm organic-transition ${
              isLiked 
                ? 'bg-destructive text-destructive-foreground' 
                : 'bg-card/80 text-muted-foreground hover:text-destructive'
            }`}
          >
            <Icon name={isLiked ? "Heart" : "Heart"} size={16} />
          </button>
          
          {food?.isTraditional && (
            <div className="p-2 bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
              <Icon name="Crown" size={16} />
            </div>
          )}
        </div>

        {/* Season Badge */}
        {food?.seasonalAvailability && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium backdrop-blur-sm">
              {food?.seasonalAvailability}
            </span>
          </div>
        )}

        {/* Preparation Time */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center space-x-1 px-2 py-1 bg-card/90 rounded-full backdrop-blur-sm">
            <Icon name="Clock" size={12} className="text-muted-foreground" />
            <span className="text-xs text-foreground font-medium">{food?.preparationTime}</span>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="p-4">
        {/* Title & Region */}
        <div className="mb-3">
          <h3 className="font-poppins font-semibold text-foreground mb-1 line-clamp-1">
            {food?.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-1">{food?.sinhalaName}</p>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={12} className="text-primary" />
            <span className="text-xs text-primary font-medium">{food?.region}</span>
          </div>
        </div>

        {/* Nutrition Highlights */}
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{food?.nutrition?.calories}</div>
              <div className="text-xs text-muted-foreground">Calories</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{food?.nutrition?.protein}g</div>
              <div className="text-xs text-muted-foreground">Protein</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{food?.nutrition?.fiber}g</div>
              <div className="text-xs text-muted-foreground">Fiber</div>
            </div>
          </div>

          {/* Nutrition Levels */}
          <div className="flex flex-wrap gap-1">
            {Object.entries(food?.nutritionLevels)?.map(([nutrient, level]) => (
              <span
                key={nutrient}
                className={`px-2 py-1 text-xs rounded-full font-medium ${getNutritionColor(level)}`}
              >
                {nutrient}
              </span>
            ))}
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Health Benefits</h4>
          <div className="flex flex-wrap gap-2">
            {food?.healthBenefits?.slice(0, 2)?.map((benefit) => (
              <div key={benefit} className="flex items-center space-x-1 text-xs text-success">
                <Icon name={getHealthBenefitIcon(benefit)} size={12} />
                <span>{benefit}</span>
              </div>
            ))}
            {food?.healthBenefits?.length > 2 && (
              <span className="text-xs text-muted-foreground">
                +{food?.healthBenefits?.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={14}
                  className={i < Math.floor(food?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">{food?.rating}</span>
            <span className="text-xs text-muted-foreground">({food?.reviewCount})</span>
          </div>
          
          {food?.difficulty && (
            <span className="text-xs text-muted-foreground">
              {food?.difficulty} level
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(food)}
            className="flex-1"
          >
            <Icon name="Eye" size={14} className="mr-1" />
            View Details
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onAddToMealPlan(food)}
            className="flex-1"
          >
            <Icon name="Plus" size={14} className="mr-1" />
            Add to Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;