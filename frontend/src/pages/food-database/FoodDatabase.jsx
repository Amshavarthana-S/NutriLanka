import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SearchFilters from './components/SearchFilters';
import FoodCard from './components/FoodCard';
import FoodDetailModal from './components/FoodDetailModal';
import CategoryGrid from './components/CategoryGrid';
import QuickStats from './components/QuickStats';

const FoodDatabase = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Mock food database
  const foodDatabase = [
  {
    id: 1,
    name: "Rice and Curry",
    sinhalaName: "බත් සහ කරි",
    region: "Western Province",
    image: "https://images.unsplash.com/photo-1704728233642-7a03de4e1e19",
    imageAlt: "Traditional Sri Lankan rice and curry meal with multiple colorful curry dishes served on banana leaf",
    category: "rice-dishes",
    preparationTime: "45 min",
    difficulty: "Medium",
    rating: 4.8,
    reviewCount: 234,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 68,
      fat: 8,
      fiber: 6
    },
    nutritionLevels: {
      "Protein": "medium",
      "Fiber": "high",
      "Iron": "high"
    },
    healthBenefits: ["Energy Boost", "Digestive Health", "Heart Health"],
    micronutrients: [
    { name: "Iron", value: "8.2mg", dailyValue: 45 },
    { name: "Vitamin B6", value: "0.4mg", dailyValue: 25 },
    { name: "Magnesium", value: "85mg", dailyValue: 20 }],

    ingredients: [
    { name: "Basmati Rice", sinhalaName: "බාස්මති හාල්", amount: "1 cup" },
    { name: "Dhal Curry", sinhalaName: "පරිප්පු කරිය", amount: "1 bowl" },
    { name: "Vegetable Curry", sinhalaName: "එළවළු කරිය", amount: "1 bowl" }],

    cookingTips: [
    "Use coconut milk for authentic flavor",
    "Cook rice with pandan leaves for aroma",
    "Balance spices according to taste preference"],

    culturalInfo: "Rice and curry is the cornerstone of Sri Lankan cuisine, representing the perfect harmony of flavors, nutrition, and cultural tradition. This meal typically consists of rice accompanied by multiple curry dishes, each contributing unique flavors and nutritional benefits.",
    ayurvedicProperties: {
      taste: "Sweet, Astringent",
      energy: "Neutral"
    }
  },
  {
    id: 2,
    name: "Hoppers",
    sinhalaName: "ආප්ප",
    region: "Central Province",
    image: "https://images.unsplash.com/photo-1712661845257-975bc5d5a399",
    imageAlt: "Traditional Sri Lankan hoppers with crispy edges and soft center, served with coconut sambol",
    category: "breakfast",
    preparationTime: "30 min",
    difficulty: "Easy",
    rating: 4.6,
    reviewCount: 189,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 180,
      protein: 4,
      carbs: 32,
      fat: 3,
      fiber: 2
    },
    nutritionLevels: {
      "Carbs": "high",
      "Protein": "low",
      "Fiber": "medium"
    },
    healthBenefits: ["Energy Boost", "Digestive Health"],
    ingredients: [
    { name: "Rice Flour", sinhalaName: "හාල් පිටි", amount: "2 cups" },
    { name: "Coconut Milk", sinhalaName: "පොල් කිරි", amount: "1 cup" },
    { name: "Yeast", sinhalaName: "යීස්ට්", amount: "1 tsp" }],

    cookingTips: [
    "Ferment batter overnight for best results",
    "Use a hopper pan for authentic shape",
    "Serve immediately while crispy"]

  },
  {
    id: 3,
    name: "Fish Curry",
    sinhalaName: "මාළු කරිය",
    region: "Southern Province",
    image: "https://images.unsplash.com/photo-1716298774503-c9f98e5363df",
    imageAlt: "Spicy Sri Lankan fish curry with thick coconut milk gravy and aromatic spices in clay pot",
    category: "seafood",
    preparationTime: "25 min",
    difficulty: "Medium",
    rating: 4.7,
    reviewCount: 156,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 280,
      protein: 28,
      carbs: 8,
      fat: 15,
      fiber: 3
    },
    nutritionLevels: {
      "Protein": "high",
      "Omega-3": "high",
      "Vitamin D": "high"
    },
    healthBenefits: ["Heart Health", "Brain Health", "Immunity Building"],
    ingredients: [
    { name: "Fresh Fish", sinhalaName: "තාජා මාළු", amount: "500g" },
    { name: "Coconut Milk", sinhalaName: "පොල් කිරි", amount: "400ml" },
    { name: "Curry Leaves", sinhalaName: "කරපිංචා", amount: "10 leaves" }]

  },
  {
    id: 4,
    name: "Kottu Roti",
    sinhalaName: "කොත්තු රොටි",
    region: "Western Province",
    image: "https://images.unsplash.com/photo-1641209678090-e16174ef7683",
    imageAlt: "Colorful kottu roti being prepared with chopped roti, vegetables, and spices on hot griddle",
    category: "snacks",
    preparationTime: "20 min",
    difficulty: "Easy",
    rating: 4.5,
    reviewCount: 298,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 350,
      protein: 15,
      carbs: 45,
      fat: 12,
      fiber: 4
    },
    nutritionLevels: {
      "Carbs": "high",
      "Protein": "medium",
      "Iron": "medium"
    },
    healthBenefits: ["Energy Boost", "Protein Source"],
    ingredients: [
    { name: "Roti Bread", sinhalaName: "රොටි පාන්", amount: "4 pieces" },
    { name: "Vegetables", sinhalaName: "එළවළු", amount: "1 cup" },
    { name: "Egg", sinhalaName: "බිත්තරය", amount: "2 pieces" }]

  },
  {
    id: 5,
    name: "Coconut Sambol",
    sinhalaName: "පොල් සම්බෝල",
    region: "All Regions",
    image: "https://images.unsplash.com/photo-1710917066585-bfc2f54bca20",
    imageAlt: "Fresh coconut sambol with red chilies, onions, and lime juice in traditional wooden bowl",
    category: "vegetables",
    preparationTime: "10 min",
    difficulty: "Easy",
    rating: 4.4,
    reviewCount: 167,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 120,
      protein: 2,
      carbs: 6,
      fat: 11,
      fiber: 4
    },
    nutritionLevels: {
      "Fiber": "high",
      "Healthy Fats": "high",
      "Vitamin C": "medium"
    },
    healthBenefits: ["Digestive Health", "Immunity Building", "Heart Health"],
    ingredients: [
    { name: "Fresh Coconut", sinhalaName: "තාජා පොල්", amount: "1 cup" },
    { name: "Red Chilies", sinhalaName: "රතු මිරිස්", amount: "3 pieces" },
    { name: "Red Onion", sinhalaName: "රතු ළූණු", amount: "1 small" }]

  },
  {
    id: 6,
    name: "Ceylon Tea",
    sinhalaName: "ලංකා තේ",
    region: "Central Province",
    image: "https://images.unsplash.com/photo-1643793433749-f29d45270407",
    imageAlt: "Traditional Ceylon tea served in glass cup with traditional Sri Lankan sweets and tea plantation background",
    category: "beverages",
    preparationTime: "5 min",
    difficulty: "Easy",
    rating: 4.9,
    reviewCount: 445,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 2,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    nutritionLevels: {
      "Antioxidants": "high",
      "Caffeine": "medium",
      "Polyphenols": "high"
    },
    healthBenefits: ["Immunity Building", "Heart Health", "Brain Health"],
    ingredients: [
    { name: "Ceylon Tea Leaves", sinhalaName: "ලංකා තේ කොළ", amount: "1 tsp" },
    { name: "Hot Water", sinhalaName: "උණු වතුර", amount: "1 cup" }]

  },
  {
    id: 7,
    name: "Watalappan",
    sinhalaName: "වටලප්පන්",
    region: "Southern Province",
    image: "https://images.unsplash.com/photo-1647661633606-388806e042df",
    imageAlt: "Traditional Sri Lankan watalappan dessert with golden caramel color served in coconut shell",
    category: "desserts",
    preparationTime: "60 min",
    difficulty: "Medium",
    rating: 4.6,
    reviewCount: 123,
    isTraditional: true,
    seasonalAvailability: "Year Round",
    nutrition: {
      calories: 220,
      protein: 6,
      carbs: 35,
      fat: 8,
      fiber: 1
    },
    nutritionLevels: {
      "Sugar": "high",
      "Protein": "medium",
      "Calcium": "medium"
    },
    healthBenefits: ["Energy Boost", "Bone Health"],
    ingredients: [
    { name: "Coconut Milk", sinhalaName: "පොල් කිරි", amount: "400ml" },
    { name: "Jaggery", sinhalaName: "හකුරු", amount: "150g" },
    { name: "Eggs", sinhalaName: "බිත්තර", amount: "4 pieces" }]

  },
  {
    id: 8,
    name: "Jackfruit Curry",
    sinhalaName: "කොස් කරිය",
    region: "North Central Province",
    image: "https://images.unsplash.com/photo-1716298774503-c9f98e5363df",
    imageAlt: "Traditional jackfruit curry with coconut milk and spices in clay pot with fresh jackfruit pieces",
    category: "curries",
    preparationTime: "35 min",
    difficulty: "Medium",
    rating: 4.3,
    reviewCount: 89,
    isTraditional: true,
    seasonalAvailability: "Maha Season (Oct-Apr)",
    nutrition: {
      calories: 160,
      protein: 3,
      carbs: 38,
      fat: 1,
      fiber: 6
    },
    nutritionLevels: {
      "Fiber": "high",
      "Vitamin C": "high",
      "Potassium": "high"
    },
    healthBenefits: ["Digestive Health", "Immunity Building", "Heart Health"],
    ingredients: [
    { name: "Young Jackfruit", sinhalaName: "කිරි කොස්", amount: "500g" },
    { name: "Coconut Milk", sinhalaName: "පොල් කිරි", amount: "200ml" },
    { name: "Curry Powder", sinhalaName: "කරි කුඩු", amount: "2 tbsp" }]

  }];


  // Filter foods based on current filters
  const filteredFoods = foodDatabase?.filter((food) => {
    // Search query filter
    if (filters?.searchQuery) {
      const query = filters?.searchQuery?.toLowerCase();
      if (!food?.name?.toLowerCase()?.includes(query) &&
      !food?.sinhalaName?.toLowerCase()?.includes(query) &&
      !food?.region?.toLowerCase()?.includes(query)) {
        return false;
      }
    }

    // Category filter
    if (selectedCategory && food?.category !== selectedCategory) {
      return false;
    }

    if (filters?.category && food?.category !== filters?.category) {
      return false;
    }

    // Region filter
    if (filters?.region && food?.region !== filters?.region) {
      return false;
    }

    // Health goals filter
    if (filters?.healthGoals && filters?.healthGoals?.length > 0) {
      const hasMatchingGoal = filters?.healthGoals?.some((goal) =>
      food?.healthBenefits?.includes(goal)
      );
      if (!hasMatchingGoal) return false;
    }

    // Preparation time filter
    if (filters?.preparationTime) {
      const prepTime = parseInt(food?.preparationTime);
      switch (filters?.preparationTime) {
        case 'quick':
          if (prepTime >= 30) return false;
          break;
        case 'medium':
          if (prepTime < 30 || prepTime > 60) return false;
          break;
        case 'long':
          if (prepTime <= 60) return false;
          break;
      }
    }

    // Season filter
    if (filters?.season && filters?.season !== 'year-round') {
      if (!food?.seasonalAvailability?.toLowerCase()?.includes(filters?.season)) {
        return false;
      }
    }

    return true;
  });

  const handleViewDetails = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleAddToMealPlan = (food) => {
    // Mock function - would integrate with meal planning system
    alert(`Added ${food?.name} to your meal plan!`);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setSearchQuery(newFilters?.searchQuery || '');
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Scroll to results
    document.getElementById('food-results')?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearCategoryFilter = () => {
    setSelectedCategory('');
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
                  Food Wisdom Center
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                  Discover the nutritional treasures of Sri Lankan cuisine through our comprehensive database of traditional dishes, ingredients, and their health benefits
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                    className="lg:hidden">

                    <Icon name="Filter" size={16} className="mr-2" />
                    Smart Filters
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-80 flex-shrink-0">
                <SearchFilters
                  onFiltersChange={handleFiltersChange}
                  isVisible={isFiltersVisible}
                  onToggle={() => setIsFiltersVisible(!isFiltersVisible)} />

              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Category Grid */}
                {!selectedCategory && !filters?.searchQuery &&
                <CategoryGrid onCategorySelect={handleCategorySelect} />
                }

                {/* Quick Stats */}
                <QuickStats
                  totalFoods={foodDatabase?.length}
                  filteredCount={filteredFoods?.length}
                  searchQuery={searchQuery} />


                {/* Active Filters & Results Header */}
                <div id="food-results" className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="font-poppins font-semibold text-xl text-foreground">
                        {selectedCategory ? 'Category Results' : 'All Foods'}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Showing {filteredFoods?.length} of {foodDatabase?.length} foods
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      {selectedCategory &&
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={clearCategoryFilter}>

                          <Icon name="X" size={14} className="mr-1" />
                          Clear Category
                        </Button>
                      }
                      
                      <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
                        <button
                          onClick={() => setViewMode('grid')}
                          className={`p-2 rounded organic-transition ${
                          viewMode === 'grid' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`
                          }>

                          <Icon name="Grid3X3" size={16} />
                        </button>
                        <button
                          onClick={() => setViewMode('list')}
                          className={`p-2 rounded organic-transition ${
                          viewMode === 'list' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`
                          }>

                          <Icon name="List" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Food Grid/List */}
                <div className={
                viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'
                }>
                  {filteredFoods?.map((food) =>
                  <FoodCard
                    key={food?.id}
                    food={food}
                    onViewDetails={handleViewDetails}
                    onAddToMealPlan={handleAddToMealPlan} />

                  )}
                </div>

                {/* No Results */}
                {filteredFoods?.length === 0 &&
                <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                      No foods found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search terms
                    </p>
                    <Button
                    variant="outline"
                    onClick={() => {
                      setFilters({});
                      setSelectedCategory('');
                      setSearchQuery('');
                    }}>

                      Clear All Filters
                    </Button>
                  </div>
                }
              </div>
            </div>
          </div>
        </main>

        {/* Food Detail Modal */}
        <FoodDetailModal
          food={selectedFood}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToMealPlan={handleAddToMealPlan} />

      </div>
    </>);

};

export default FoodDatabase;