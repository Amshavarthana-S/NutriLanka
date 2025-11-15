import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FoodDetailModal = ({ food, isOpen, onClose, onAddToMealPlan }) => {
  const [activeTab, setActiveTab] = useState('nutrition');

  if (!isOpen || !food) return null;

  const tabs = [
    { id: 'nutrition', label: 'Nutrition', icon: 'BarChart3' },
    { id: 'ingredients', label: 'Ingredients', icon: 'List' },
    { id: 'preparation', label: 'Preparation', icon: 'ChefHat' },
    { id: 'benefits', label: 'Health Benefits', icon: 'Heart' },
    { id: 'cultural', label: 'Cultural Info', icon: 'Book' }
  ];

  const getNutrientBarWidth = (value, max) => {
    return Math.min((value / max) * 100, 100);
  };

  const renderNutritionTab = () => (
    <div className="space-y-6">
      {/* Macronutrients */}
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Macronutrients (per 100g)</h4>
        <div className="space-y-4">
          {[
            { name: 'Calories', value: food?.nutrition?.calories, unit: 'kcal', max: 500, color: 'bg-primary' },
            { name: 'Protein', value: food?.nutrition?.protein, unit: 'g', max: 30, color: 'bg-success' },
            { name: 'Carbohydrates', value: food?.nutrition?.carbs, unit: 'g', max: 80, color: 'bg-warning' },
            { name: 'Fat', value: food?.nutrition?.fat, unit: 'g', max: 25, color: 'bg-accent' },
            { name: 'Fiber', value: food?.nutrition?.fiber, unit: 'g', max: 15, color: 'bg-secondary' }
          ]?.map((nutrient) => (
            <div key={nutrient?.name} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{nutrient?.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {nutrient?.value}{nutrient?.unit}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${nutrient?.color} organic-transition`}
                    style={{ width: `${getNutrientBarWidth(nutrient?.value, nutrient?.max)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micronutrients */}
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Key Micronutrients</h4>
        <div className="grid grid-cols-2 gap-4">
          {food?.micronutrients?.map((nutrient) => (
            <div key={nutrient?.name} className="p-3 bg-muted rounded-lg">
              <div className="text-sm font-medium text-foreground">{nutrient?.name}</div>
              <div className="text-lg font-bold text-primary">{nutrient?.value}</div>
              <div className="text-xs text-muted-foreground">{nutrient?.dailyValue}% DV</div>
            </div>
          )) || (
            <div className="col-span-2 text-center text-muted-foreground py-4">
              Detailed micronutrient data coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderIngredientsTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Main Ingredients</h4>
        <div className="space-y-3">
          {food?.ingredients?.map((ingredient, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium text-foreground">{ingredient?.name}</span>
                <span className="text-sm text-muted-foreground">({ingredient?.sinhalaName})</span>
              </div>
              <span className="text-sm text-primary font-medium">{ingredient?.amount}</span>
            </div>
          )) || (
            <div className="text-center text-muted-foreground py-4">
              Ingredient details coming soon
            </div>
          )}
        </div>
      </div>

      {/* Seasonal Availability */}
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Seasonal Availability</h4>
        <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={16} className="text-secondary" />
            <span className="font-medium text-foreground">Best Season: {food?.seasonalAvailability}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Ingredients are freshest and most nutritious during this period
          </p>
        </div>
      </div>
    </div>
  );

  const renderPreparationTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Preparation Method</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
            <Icon name="Clock" size={20} className="text-primary" />
            <div>
              <div className="font-medium text-foreground">Preparation Time</div>
              <div className="text-sm text-muted-foreground">{food?.preparationTime}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
            <Icon name="Users" size={20} className="text-primary" />
            <div>
              <div className="font-medium text-foreground">Serves</div>
              <div className="text-sm text-muted-foreground">{food?.servings || '4-6 people'}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <div>
              <div className="font-medium text-foreground">Difficulty Level</div>
              <div className="text-sm text-muted-foreground">{food?.difficulty || 'Medium'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooking Tips */}
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Traditional Cooking Tips</h4>
        <div className="space-y-3">
          {food?.cookingTips?.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 border border-primary/10 rounded-lg">
              <Icon name="Lightbulb" size={16} className="text-primary mt-0.5" />
              <p className="text-sm text-foreground">{tip}</p>
            </div>
          )) || (
            <div className="text-center text-muted-foreground py-4">
              Cooking tips coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderBenefitsTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Health Benefits</h4>
        <div className="grid gap-4">
          {food?.healthBenefits?.map((benefit, index) => (
            <div key={index} className="p-4 bg-success/5 border border-success/10 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-success" />
                </div>
                <h5 className="font-medium text-foreground">{benefit}</h5>
              </div>
              <p className="text-sm text-muted-foreground ml-11">
                {food?.benefitDescriptions?.[benefit] || 'Supports overall health and wellness through traditional nutritional wisdom.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ayurvedic Properties */}
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Ayurvedic Properties</h4>
        <div className="p-4 bg-accent/5 border border-accent/10 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-foreground">Taste (Rasa)</span>
              <p className="text-sm text-muted-foreground">{food?.ayurvedicProperties?.taste || 'Sweet, Astringent'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Energy (Virya)</span>
              <p className="text-sm text-muted-foreground">{food?.ayurvedicProperties?.energy || 'Cooling'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCulturalTab = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Cultural Significance</h4>
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
          <p className="text-sm text-foreground leading-relaxed">
            {food?.culturalInfo || `${food?.name} holds a special place in Sri Lankan cuisine, representing the rich culinary heritage passed down through generations. This traditional dish showcases the perfect balance of flavors and nutrition that characterizes authentic Sri Lankan cooking.`}
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Regional Variations</h4>
        <div className="space-y-3">
          {food?.regionalVariations?.map((variation, index) => (
            <div key={index} className="p-3 bg-muted rounded-lg">
              <div className="font-medium text-foreground mb-1">{variation?.region}</div>
              <p className="text-sm text-muted-foreground">{variation?.description}</p>
            </div>
          )) || (
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium text-foreground mb-1">{food?.region}</div>
              <p className="text-sm text-muted-foreground">
                This dish is particularly popular in {food?.region}, where it's prepared with local ingredients and traditional methods.
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h4 className="font-poppins font-semibold text-foreground mb-4">Traditional Occasions</h4>
        <div className="flex flex-wrap gap-2">
          {food?.occasions?.map((occasion, index) => (
            <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
              {occasion}
            </span>
          )) || (
            <>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                Daily Meals
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                Family Gatherings
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-lg heritage-shadow overflow-hidden">
        {/* Header */}
        <div className="relative">
          <Image
            src={food?.image}
            alt={food?.imageAlt}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-card/90 hover:bg-card rounded-full organic-transition"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-1">{food?.name}</h2>
            <p className="text-lg text-muted-foreground mb-2">{food?.sinhalaName}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-sm text-primary font-medium">{food?.region}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={16} className="text-warning" />
                <span className="text-sm text-foreground font-medium">{food?.rating}</span>
                <span className="text-sm text-muted-foreground">({food?.reviewCount})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium organic-transition whitespace-nowrap ${
                  activeTab === tab?.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'nutrition' && renderNutritionTab()}
          {activeTab === 'ingredients' && renderIngredientsTab()}
          {activeTab === 'preparation' && renderPreparationTab()}
          {activeTab === 'benefits' && renderBenefitsTab()}
          {activeTab === 'cultural' && renderCulturalTab()}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
            <Button
              variant="default"
              onClick={() => onAddToMealPlan(food)}
              className="flex-1"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Add to Meal Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailModal;