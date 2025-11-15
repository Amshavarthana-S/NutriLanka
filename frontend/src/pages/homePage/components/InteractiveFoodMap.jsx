import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveFoodMap = () => {
  const [selectedRegion, setSelectedRegion] = useState('western');

  const regions = [
  {
    id: 'western',
    name: 'Western Province',
    color: 'bg-primary',
    specialties: [
    {
      name: 'Kottu Roti',
      image: "https://images.unsplash.com/photo-1662611284583-f34180194370",
      alt: 'Chopped roti bread stir-fried with vegetables and spices in a large pan',
      healthScore: 78,
      calories: 420,
      benefits: ['High Protein', 'Iron Rich']
    },
    {
      name: 'Hoppers (Appa)',
      image: "https://images.unsplash.com/photo-1665491481092-b8d7eca8056c",
      alt: 'Bowl-shaped fermented rice pancakes with crispy edges and soft center',
      healthScore: 85,
      calories: 180,
      benefits: ['Probiotic', 'Low Fat']
    }]

  },
  {
    id: 'central',
    name: 'Central Province',
    color: 'bg-secondary',
    specialties: [
    {
      name: 'Kandyan Rice & Curry',
      image: "https://images.unsplash.com/photo-1704728233642-7a03de4e1e19",
      alt: 'Traditional rice meal with multiple curry dishes served on banana leaf',
      healthScore: 92,
      calories: 380,
      benefits: ['Balanced Nutrition', 'Fiber Rich']
    },
    {
      name: 'Kiribath',
      image: "https://images.unsplash.com/photo-1700113120070-b79d456b462c",
      alt: 'Square pieces of coconut milk rice garnished with curry leaves',
      healthScore: 70,
      calories: 220,
      benefits: ['Calcium Rich', 'Energy Boost']
    }]

  },
  {
    id: 'northern',
    name: 'Northern Province',
    color: 'bg-accent',
    specialties: [
    {
      name: 'Jaffna Crab Curry',
      image: "https://images.unsplash.com/photo-1726452842925-6507fa5d5fad",
      alt: 'Spicy crab curry with thick coconut gravy and aromatic spices',
      healthScore: 88,
      calories: 320,
      benefits: ['Omega-3', 'High Protein']
    },
    {
      name: 'Puttu',
      image: "https://images.unsplash.com/photo-1733268884077-2f82b8db87fe",
      alt: 'Cylindrical steamed rice flour cake with coconut layers',
      healthScore: 82,
      calories: 160,
      benefits: ['Gluten Free', 'Easy Digest']
    }]

  },
  {
    id: 'southern',
    name: 'Southern Province',
    color: 'bg-warning',
    specialties: [
    {
      name: 'Fish Ambul Thiyal',
      image: "https://images.unsplash.com/photo-1645066804237-08145dd196e9",
      alt: 'Dark fish curry with goraka fruit giving tangy flavor and rich color',
      healthScore: 90,
      calories: 280,
      benefits: ['Antioxidants', 'Heart Healthy']
    },
    {
      name: 'Wambatu Moju',
      image: "https://images.unsplash.com/photo-1700481955246-a45a4633ab1a",
      alt: 'Sweet and sour eggplant pickle with caramelized onions and spices',
      healthScore: 75,
      calories: 140,
      benefits: ['Antioxidants', 'Low Calorie']
    }]

  }];


  const currentRegion = regions?.find((r) => r?.id === selectedRegion);

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Icon name="MapPin" size={16} />
            <span className="text-sm font-medium font-poppins">Regional Food Discovery</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Explore Sri Lanka's
            <span className="block text-primary">Culinary Heritage</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Discover the unique flavors and health benefits of traditional dishes from each province. 
            Click on regions to explore their signature foods and nutritional insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 heritage-shadow">
              <h3 className="text-xl font-semibold font-poppins text-foreground mb-6 text-center">
                Sri Lankan Food Regions
              </h3>
              
              {/* Simplified Map Representation */}
              <div className="relative w-full h-80 bg-background rounded-xl border-2 border-border overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background"></div>
                
                {/* Region Buttons */}
                <button
                  onClick={() => setSelectedRegion('northern')}
                  className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 rounded-lg organic-transition ${
                  selectedRegion === 'northern' ? 'bg-accent text-accent-foreground' : 'bg-card hover:bg-muted'} border-2 border-border heritage-shadow flex items-center justify-center`
                  }>

                  <div className="text-center">
                    <div className="text-xs font-medium">Northern</div>
                    <Icon name="MapPin" size={12} />
                  </div>
                </button>

                <button
                  onClick={() => setSelectedRegion('central')}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-20 rounded-lg organic-transition ${
                  selectedRegion === 'central' ? 'bg-secondary text-secondary-foreground' : 'bg-card hover:bg-muted'} border-2 border-border heritage-shadow flex items-center justify-center`
                  }>

                  <div className="text-center">
                    <div className="text-xs font-medium">Central</div>
                    <Icon name="Mountain" size={12} />
                  </div>
                </button>

                <button
                  onClick={() => setSelectedRegion('western')}
                  className={`absolute bottom-1/3 left-4 w-20 h-16 rounded-lg organic-transition ${
                  selectedRegion === 'western' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted'} border-2 border-border heritage-shadow flex items-center justify-center`
                  }>

                  <div className="text-center">
                    <div className="text-xs font-medium">Western</div>
                    <Icon name="Building2" size={12} />
                  </div>
                </button>

                <button
                  onClick={() => setSelectedRegion('southern')}
                  className={`absolute bottom-4 right-1/3 w-20 h-16 rounded-lg organic-transition ${
                  selectedRegion === 'southern' ? 'bg-warning text-warning-foreground' : 'bg-card hover:bg-muted'} border-2 border-border heritage-shadow flex items-center justify-center`
                  }>

                  <div className="text-center">
                    <div className="text-xs font-medium">Southern</div>
                    <Icon name="Waves" size={12} />
                  </div>
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 text-muted-foreground">
                  <Icon name="Compass" size={16} />
                </div>
              </div>

              {/* Region Info */}
              <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${currentRegion?.color}`}></div>
                  <h4 className="font-semibold font-poppins text-foreground">{currentRegion?.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Explore the signature dishes and their health benefits from this region.
                </p>
              </div>
            </div>
          </div>

          {/* Regional Specialties */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold font-poppins text-foreground">
                {currentRegion?.name} Specialties
              </h3>
              <Link to="/food-database">
                <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                  View All
                </Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {currentRegion?.specialties?.map((dish, index) =>
              <div key={index} className="bg-background rounded-xl border border-border heritage-shadow overflow-hidden organic-transition hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <Image
                      src={dish?.image}
                      alt={dish?.alt}
                      className="w-full h-48 sm:h-full object-cover" />

                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold font-poppins text-foreground">
                          {dish?.name}
                        </h4>
                        <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
                          <Icon name="Heart" size={12} />
                          <span className="text-xs font-medium">{dish?.healthScore}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Zap" size={14} />
                          <span>{dish?.calories} cal</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {dish?.benefits?.map((benefit, idx) =>
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">

                            {benefit}
                          </span>
                      )}
                      </div>

                      <Link to="/food-database">
                        <Button variant="ghost" size="sm" iconName="Info" iconPosition="left">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default InteractiveFoodMap;