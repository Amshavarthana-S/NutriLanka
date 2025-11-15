import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PopularDishesSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const categories = [
  { id: 'breakfast', name: 'Breakfast', icon: 'Sunrise' },
  { id: 'lunch', name: 'Lunch', icon: 'Sun' },
  { id: 'dinner', name: 'Dinner', icon: 'Moon' },
  { id: 'snacks', name: 'Snacks', icon: 'Coffee' }];


  const dishes = {
    breakfast: [
    {
      id: 1,
      name: 'String Hoppers (Idiyappa)',
      image: "https://images.unsplash.com/photo-1615185818078-825d76e14212",
      alt: 'Delicate white string hoppers arranged in circular pattern with coconut sambol',
      healthScore: 88,
      calories: 150,
      prepTime: '20 min',
      difficulty: 'Medium',
      benefits: ['Low Fat', 'Gluten Free', 'Probiotic'],
      description: 'Traditional steamed rice noodle cakes, perfect for a light and healthy start to your day.',
      nutritionHighlights: {
        protein: '4g',
        carbs: '32g',
        fiber: '2g'
      }
    },
    {
      id: 2,
      name: 'Coconut Roti with Pol Sambol',
      image: "https://images.unsplash.com/photo-1625567511000-81a4a696b175",
      alt: 'Fresh coconut roti flatbread served with spicy coconut sambol and curry',
      healthScore: 75,
      calories: 280,
      prepTime: '15 min',
      difficulty: 'Easy',
      benefits: ['High Fiber', 'Healthy Fats', 'Energy Boost'],
      description: 'Wholesome coconut-infused flatbread paired with traditional spicy coconut relish.',
      nutritionHighlights: {
        protein: '6g',
        carbs: '38g',
        fiber: '5g'
      }
    },
    {
      id: 3,
      name: 'Kiribath with Lunu Miris',
      image: "https://images.unsplash.com/photo-1705234384751-84081009588e",
      alt: 'Square pieces of coconut milk rice with spicy onion chili paste on banana leaf',
      healthScore: 70,
      calories: 220,
      prepTime: '25 min',
      difficulty: 'Easy',
      benefits: ['Calcium Rich', 'Comfort Food', 'Traditional'],
      description: 'Creamy coconut milk rice served with fiery onion and chili paste.',
      nutritionHighlights: {
        protein: '5g',
        carbs: '42g',
        fiber: '1g'
      }
    }],

    lunch: [
    {
      id: 4,
      name: 'Rice & Curry Platter',
      image: "https://images.unsplash.com/photo-1704728233642-7a03de4e1e19",
      alt: 'Traditional rice and curry meal with multiple vegetable curries on banana leaf',
      healthScore: 92,
      calories: 420,
      prepTime: '45 min',
      difficulty: 'Medium',
      benefits: ['Complete Nutrition', 'Balanced Meal', 'Antioxidants'],
      description: 'The quintessential Sri Lankan meal with rice and an array of nutritious curries.',
      nutritionHighlights: {
        protein: '12g',
        carbs: '68g',
        fiber: '8g'
      }
    },
    {
      id: 5,
      name: 'Fish Curry with Red Rice',
      image: "https://images.unsplash.com/photo-1585040867721-72cb8348b986",
      alt: 'Spicy fish curry with coconut milk served alongside nutritious red rice',
      healthScore: 89,
      calories: 380,
      prepTime: '35 min',
      difficulty: 'Medium',
      benefits: ['Omega-3', 'High Protein', 'Heart Healthy'],
      description: 'Fresh fish cooked in aromatic spices and coconut milk, served with nutrient-rich red rice.',
      nutritionHighlights: {
        protein: '28g',
        carbs: '45g',
        fiber: '6g'
      }
    },
    {
      id: 6,
      name: 'Jackfruit Curry (Polos)',
      image: "https://images.unsplash.com/photo-1716298774503-c9f98e5363df",
      alt: 'Rich jackfruit curry with coconut milk and traditional spices in clay pot',
      healthScore: 85,
      calories: 320,
      prepTime: '40 min',
      difficulty: 'Medium',
      benefits: ['Plant Protein', 'Fiber Rich', 'Vegan'],
      description: 'Tender young jackfruit cooked in a rich, spiced coconut gravy.',
      nutritionHighlights: {
        protein: '8g',
        carbs: '52g',
        fiber: '12g'
      }
    }],

    dinner: [
    {
      id: 7,
      name: 'Kottu Roti',
      image: "https://images.unsplash.com/photo-1662611284583-f34180194370",
      alt: 'Chopped roti stir-fried with vegetables, egg and spices in large pan',
      healthScore: 78,
      calories: 450,
      prepTime: '20 min',
      difficulty: 'Easy',
      benefits: ['High Protein', 'Iron Rich', 'Satisfying'],
      description: 'Sri Lanka\'s beloved street food - chopped roti stir-fried with vegetables and spices.',
      nutritionHighlights: {
        protein: '18g',
        carbs: '55g',
        fiber: '4g'
      }
    },
    {
      id: 8,
      name: 'Hoppers with Egg Curry',
      image: "https://images.unsplash.com/photo-1647061027528-c866521ab883",
      alt: 'Bowl-shaped fermented rice pancakes with spicy egg curry and coconut sambol',
      healthScore: 82,
      calories: 350,
      prepTime: '30 min',
      difficulty: 'Hard',
      benefits: ['Probiotic', 'Complete Protein', 'Traditional'],
      description: 'Fermented rice pancakes served with aromatic egg curry.',
      nutritionHighlights: {
        protein: '15g',
        carbs: '48g',
        fiber: '3g'
      }
    }],

    snacks: [
    {
      id: 9,
      name: 'Isso Vadei (Prawn Fritters)',
      image: "https://images.unsplash.com/photo-1670255900094-2e2d02cfd97d",
      alt: 'Golden brown prawn fritters with crispy exterior and tender prawns inside',
      healthScore: 72,
      calories: 180,
      prepTime: '25 min',
      difficulty: 'Medium',
      benefits: ['High Protein', 'Omega-3', 'Crispy Texture'],
      description: 'Crispy lentil fritters packed with fresh prawns and aromatic spices.',
      nutritionHighlights: {
        protein: '12g',
        carbs: '15g',
        fiber: '3g'
      }
    },
    {
      id: 10,
      name: 'Kokis (Rice Flour Cookies)',
      image: "https://images.unsplash.com/photo-1598185497395-a539b1830288",
      alt: 'Delicate flower-shaped rice flour cookies with golden crispy texture',
      healthScore: 65,
      calories: 120,
      prepTime: '30 min',
      difficulty: 'Hard',
      benefits: ['Gluten Free', 'Festive Treat', 'Light Snack'],
      description: 'Traditional flower-shaped rice flour cookies, perfect for celebrations.',
      nutritionHighlights: {
        protein: '2g',
        carbs: '18g',
        fiber: '1g'
      }
    }]

  };

  const currentDishes = dishes?.[activeCategory];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full border border-secondary/20 mb-4">
            <Icon name="ChefHat" size={16} />
            <span className="text-sm font-medium font-poppins">Traditional Favorites</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Popular Sri Lankan
            <span className="block text-secondary">Dishes & Health Insights</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Discover the nutritional benefits of beloved traditional dishes. Each recipe includes health scores, 
            calorie information, and preparation guidance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full organic-transition font-poppins font-medium ${
            activeCategory === category?.id ?
            'bg-primary text-primary-foreground heritage-shadow' :
            'bg-muted text-muted-foreground hover:bg-card hover:text-foreground'}`
            }>

              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
            </button>
          )}
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentDishes?.map((dish) =>
          <div key={dish?.id} className="bg-card rounded-2xl heritage-shadow overflow-hidden organic-transition hover:shadow-lg group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                src={dish?.image}
                alt={dish?.alt}
                className="w-full h-48 object-cover group-hover:scale-105 organic-transition" />

                
                {/* Health Score Badge */}
                <div className="absolute top-3 right-3 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                  <Icon name="Heart" size={14} className="inline mr-1" />
                  {dish?.healthScore}
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {dish?.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-semibold font-poppins text-foreground mb-2">
                    {dish?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    {dish?.description}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Zap" size={14} />
                    <span>{dish?.calories} cal</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{dish?.prepTime}</span>
                  </div>
                </div>

                {/* Nutrition Highlights */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-muted rounded-lg">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Protein</div>
                    <div className="font-semibold text-foreground text-sm">{dish?.nutritionHighlights?.protein}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Carbs</div>
                    <div className="font-semibold text-foreground text-sm">{dish?.nutritionHighlights?.carbs}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Fiber</div>
                    <div className="font-semibold text-foreground text-sm">{dish?.nutritionHighlights?.fiber}</div>
                  </div>
                </div>

                {/* Benefits Tags */}
                <div className="flex flex-wrap gap-2">
                  {dish?.benefits?.slice(0, 2)?.map((benefit, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">

                      {benefit}
                    </span>
                )}
                  {dish?.benefits?.length > 2 &&
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      +{dish?.benefits?.length - 2} more
                    </span>
                }
                </div>

                {/* Action Button */}
                <Link to="/food-database">
                  <Button variant="outline" size="sm" fullWidth iconName="ArrowRight" iconPosition="right">
                    View Recipe & Nutrition
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-semibold font-poppins text-foreground mb-4">
            Explore Our Complete Food Database
          </h3>
          <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
            Discover over 2,500 traditional Sri Lankan recipes with detailed nutritional information, 
            health benefits, and cooking instructions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/food-database">
              <Button variant="default" size="lg" iconName="Database" iconPosition="right">
                Browse All Recipes
              </Button>
            </Link>
            <Link to="/meal-planning">
              <Button variant="outline" size="lg" iconName="Calendar" iconPosition="right">
                Plan Your Meals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default PopularDishesSection;