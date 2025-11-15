import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const SearchFilters = ({ onFiltersChange, isVisible, onToggle }) => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: '',
    region: '',
    healthGoals: [],
    dietaryRestrictions: [],
    preparationTime: '',
    season: '',
    nutritionFocus: ''
  });

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'rice-dishes', label: 'Rice Dishes (බත් වර්ග)' },
    { value: 'curries', label: 'Curries (කරි වර්ග)' },
    { value: 'vegetables', label: 'Vegetables (එළවළු)' },
    { value: 'seafood', label: 'Seafood (මුහුදු ආහාර)' },
    { value: 'snacks', label: 'Snacks (කෑම වර්ග)' },
    { value: 'beverages', label: 'Beverages (පානීය)' },
    { value: 'desserts', label: 'Desserts (අතුරුපස)' },
    { value: 'breakfast', label: 'Breakfast (උදේ ආහාර)' }
  ];

  const regionOptions = [
    { value: '', label: 'All Regions' },
    { value: 'western', label: 'Western Province' },
    { value: 'central', label: 'Central Province' },
    { value: 'southern', label: 'Southern Province' },
    { value: 'northern', label: 'Northern Province' },
    { value: 'eastern', label: 'Eastern Province' },
    { value: 'north-western', label: 'North Western Province' },
    { value: 'north-central', label: 'North Central Province' },
    { value: 'uva', label: 'Uva Province' },
    { value: 'sabaragamuwa', label: 'Sabaragamuwa Province' }
  ];

  const preparationTimeOptions = [
    { value: '', label: 'Any Duration' },
    { value: 'quick', label: 'Quick (< 30 min)' },
    { value: 'medium', label: 'Medium (30-60 min)' },
    { value: 'long', label: 'Long (> 60 min)' }
  ];

  const seasonOptions = [
    { value: '', label: 'All Seasons' },
    { value: 'yala', label: 'Yala Season (May-Sep)' },
    { value: 'maha', label: 'Maha Season (Oct-Apr)' },
    { value: 'year-round', label: 'Year Round' }
  ];

  const nutritionFocusOptions = [
    { value: '', label: 'All Nutrients' },
    { value: 'protein', label: 'High Protein' },
    { value: 'fiber', label: 'High Fiber' },
    { value: 'iron', label: 'Rich in Iron' },
    { value: 'calcium', label: 'Rich in Calcium' },
    { value: 'vitamins', label: 'Vitamin Rich' },
    { value: 'low-calorie', label: 'Low Calorie' },
    { value: 'antioxidants', label: 'Antioxidant Rich' }
  ];

  const healthGoalsList = [
    'Weight Management',
    'Diabetes Control',
    'Heart Health',
    'Digestive Health',
    'Energy Boost',
    'Immunity Building',
    'Bone Health',
    'Brain Health'
  ];

  const dietaryRestrictionsList = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Low Sodium',
    'Low Sugar',
    'Nut-Free',
    'Spice-Free'
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleArrayFilterChange = (key, value, checked) => {
    const currentArray = filters?.[key];
    const newArray = checked 
      ? [...currentArray, value]
      : currentArray?.filter(item => item !== value);
    
    const newFilters = { ...filters, [key]: newArray };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      searchQuery: '',
      category: '',
      region: '',
      healthGoals: [],
      dietaryRestrictions: [],
      preparationTime: '',
      season: '',
      nutritionFocus: ''
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const activeFiltersCount = Object.values(filters)?.filter(value => 
    Array.isArray(value) ? value?.length > 0 : value !== ''
  )?.length;

  return (
    <div className={`bg-card border border-border rounded-lg heritage-shadow organic-transition ${
      isVisible ? 'block' : 'hidden lg:block'
    }`}>
      {/* Filter Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Filter" size={20} className="text-primary" />
            <div>
              <h3 className="font-poppins font-semibold text-foreground">Smart Filters</h3>
              <p className="text-xs text-muted-foreground">Find your perfect dish</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                {activeFiltersCount}
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="lg:hidden"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </div>
      </div>
      {/* Filter Content */}
      <div className="p-4 space-y-6 max-h-96 lg:max-h-none overflow-y-auto">
        {/* Search Input */}
        <div>
          <Input
            type="search"
            placeholder="Search dishes, ingredients... (කෑම, අමුද්‍රව්‍ය)"
            value={filters?.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e?.target?.value)}
            className="w-full"
          />
        </div>

        {/* Category & Region */}
        <div className="grid grid-cols-1 gap-4">
          <Select
            label="Food Category"
            options={categoryOptions}
            value={filters?.category}
            onChange={(value) => handleFilterChange('category', value)}
            placeholder="Select category"
          />
          
          <Select
            label="Regional Cuisine"
            options={regionOptions}
            value={filters?.region}
            onChange={(value) => handleFilterChange('region', value)}
            placeholder="Select region"
          />
        </div>

        {/* Health Goals */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Health Goals
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {healthGoalsList?.map((goal) => (
              <Checkbox
                key={goal}
                label={goal}
                checked={filters?.healthGoals?.includes(goal)}
                onChange={(e) => handleArrayFilterChange('healthGoals', goal, e?.target?.checked)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Dietary Restrictions */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Dietary Preferences
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {dietaryRestrictionsList?.map((restriction) => (
              <Checkbox
                key={restriction}
                label={restriction}
                checked={filters?.dietaryRestrictions?.includes(restriction)}
                onChange={(e) => handleArrayFilterChange('dietaryRestrictions', restriction, e?.target?.checked)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Time & Season */}
        <div className="grid grid-cols-1 gap-4">
          <Select
            label="Preparation Time"
            options={preparationTimeOptions}
            value={filters?.preparationTime}
            onChange={(value) => handleFilterChange('preparationTime', value)}
            placeholder="Any duration"
          />
          
          <Select
            label="Seasonal Availability"
            options={seasonOptions}
            value={filters?.season}
            onChange={(value) => handleFilterChange('season', value)}
            placeholder="All seasons"
          />
        </div>

        {/* Nutrition Focus */}
        <Select
          label="Nutrition Focus"
          options={nutritionFocusOptions}
          value={filters?.nutritionFocus}
          onChange={(value) => handleFilterChange('nutritionFocus', value)}
          placeholder="All nutrients"
        />

        {/* Clear Filters */}
        {activeFiltersCount > 0 && (
          <Button
            variant="outline"
            onClick={clearAllFilters}
            fullWidth
            className="mt-4"
          >
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Clear All Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;