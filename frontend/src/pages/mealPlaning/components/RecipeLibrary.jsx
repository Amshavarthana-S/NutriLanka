import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const RecipeLibrary = ({ currentLanguage, onRecipeSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const translations = {
    en: {
      title: "Recipe Library",
      subtitle: "Traditional Sri Lankan recipes with nutritional insights",
      searchPlaceholder: "Search recipes...",
      categories: {
        all: 'All Recipes',
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        dinner: 'Dinner',
        snacks: 'Snacks',
        beverages: 'Beverages'
      },
      filters: {
        vegetarian: 'Vegetarian',
        vegan: 'Vegan',
        glutenFree: 'Gluten Free',
        diabeticFriendly: 'Diabetic Friendly'
      },
      addToPlan: 'Add to Plan',
      viewRecipe: 'View Recipe',
      cookingTime: 'min',
      servings: 'servings',
      calories: 'cal',
      difficulty: {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard'
      }
    },
    si: {
      title: "වට්ටෝරු පුස්තකාලය",
      subtitle: "පෝෂණ තොරතුරු සහිත සාම්ප්‍රදායික ශ්‍රී ලාංකික වට්ටෝරු",
      searchPlaceholder: "වට්ටෝරු සොයන්න...",
      categories: {
        all: 'සියලුම වට්ටෝරු',
        breakfast: 'උදෑසන ආහාර',
        lunch: 'දිවා ආහාර',
        dinner: 'රාත්‍රී ආහාර',
        snacks: 'කෙටි ආහාර',
        beverages: 'පානීය'
      },
      filters: {
        vegetarian: 'නිර්මාංශ',
        vegan: 'වීගන්',
        glutenFree: 'ග්ලූටන් රහිත',
        diabeticFriendly: 'දියවැඩියා රෝගීන්ට සුදුසු'
      },
      addToPlan: 'සැලසුමට එක් කරන්න',
      viewRecipe: 'වට්ටෝරුව බලන්න',
      cookingTime: 'මිනිත්තු',
      servings: 'කොටස්',
      calories: 'කැලරි',
      difficulty: {
        easy: 'පහසු',
        medium: 'මධ්‍යම',
        hard: 'අපහසු'
      }
    },
    ta: {
      title: "செய்முறை நூலகம்",
      subtitle: "ஊட்டச்சத்து நுண்ணறிவுகளுடன் பாரம்பரிய இலங்கை சமையல்",
      searchPlaceholder: "செய்முறைகளைத் தேடுங்கள்...",
      categories: {
        all: 'அனைத்து செய்முறைகள்',
        breakfast: 'காலை உணவு',
        lunch: 'மதிய உணவு',
        dinner: 'இரவு உணவு',
        snacks: 'சிற்றுண்டி',
        beverages: 'பானங்கள்'
      },
      filters: {
        vegetarian: 'சைவம்',
        vegan: 'வீகன்',
        glutenFree: 'குளூட்டன் இல்லாத',
        diabeticFriendly: 'நீரிழிவு நோயாளிகளுக்கு ஏற்றது'
      },
      addToPlan: 'திட்டத்தில் சேர்க்க',
      viewRecipe: 'செய்முறை பார்க்க',
      cookingTime: 'நிமிடம்',
      servings: 'பரிமாறல்கள்',
      calories: 'கலோரி',
      difficulty: {
        easy: 'எளிது',
        medium: 'நடுத்தர',
        hard: 'கடினம்'
      }
    }
  };

  const mockRecipes = [
  {
    id: 1,
    name: 'Kiribath with Lunu Miris',
    nameLocal: { si: 'කිරිබත් ලුණු මිරිස් සමඟ', ta: 'கிரிபத் லுனு மிரிஸ் உடன்' },
    category: 'breakfast',
    image: "https://images.unsplash.com/photo-1705234384751-84081009588e",
    alt: 'Traditional Sri Lankan milk rice with spicy coconut sambol on banana leaf',
    cookingTime: 45,
    servings: 4,
    calories: 320,
    difficulty: 'easy',
    tags: ['vegetarian', 'traditional'],
    description: 'Traditional coconut milk rice served with spicy onion relish'
  },
  {
    id: 2,
    name: 'Hoppers with Egg',
    nameLocal: { si: 'ඇප්ප බිත්තර සමඟ', ta: 'ஆப்பம் முட்டையுடன்' },
    category: 'breakfast',
    image: "https://images.unsplash.com/photo-1708706120190-56d62218dd37",
    alt: 'Bowl-shaped Sri Lankan hoppers with fried egg in center on wooden plate',
    cookingTime: 30,
    servings: 2,
    calories: 290,
    difficulty: 'medium',
    tags: ['traditional', 'protein-rich'],
    description: 'Fermented rice flour pancakes with coconut milk and egg'
  },
  {
    id: 3,
    name: 'Kottu Roti',
    nameLocal: { si: 'කොත්තු රොටි', ta: 'கொத்து ரொட்டி' },
    category: 'dinner',
    image: "https://images.unsplash.com/photo-1663863220539-c9083bf48b9c",
    alt: 'Chopped roti stir-fried with vegetables and spices in traditional kottu style',
    cookingTime: 25,
    servings: 3,
    calories: 520,
    difficulty: 'medium',
    tags: ['street-food', 'spicy'],
    description: 'Chopped flatbread stir-fried with vegetables and spices'
  },
  {
    id: 4,
    name: 'String Hoppers with Dhal',
    nameLocal: { si: 'ඉදිආප්ප පරිප්පු සමඟ', ta: 'இடியாப்பம் பருப்புடன்' },
    category: 'dinner',
    image: "https://images.unsplash.com/photo-1601532437517-d2251f063e67",
    alt: 'Steamed string hoppers served with yellow lentil curry and coconut sambol',
    cookingTime: 40,
    servings: 4,
    calories: 380,
    difficulty: 'medium',
    tags: ['vegetarian', 'protein-rich', 'diabeticFriendly'],
    description: 'Steamed rice noodle nests with spiced lentil curry'
  },
  {
    id: 5,
    name: 'Coconut Roti',
    nameLocal: { si: 'පොල් රොටි', ta: 'தேங்காய் ரொட்டி' },
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1706771219650-498d7cd77b63",
    alt: 'Fresh coconut roti flatbread with grated coconut filling on banana leaf',
    cookingTime: 20,
    servings: 6,
    calories: 180,
    difficulty: 'easy',
    tags: ['vegetarian', 'vegan', 'quick'],
    description: 'Soft flatbread with fresh grated coconut and spices'
  },
  {
    id: 6,
    name: 'Fish Curry',
    nameLocal: { si: 'මාළු කරි', ta: 'மீன் கறி' },
    category: 'lunch',
    image: "https://images.unsplash.com/photo-1716298774503-c9f98e5363df",
    alt: 'Spicy Sri Lankan fish curry with coconut milk in traditional clay pot',
    cookingTime: 35,
    servings: 4,
    calories: 420,
    difficulty: 'medium',
    tags: ['protein-rich', 'spicy', 'traditional'],
    description: 'Spicy fish curry cooked in coconut milk with traditional spices'
  }];


  const t = translations?.[currentLanguage];

  const filteredRecipes = mockRecipes?.filter((recipe) => {
    const matchesCategory = selectedCategory === 'all' || recipe?.category === selectedCategory;
    const matchesSearch = recipe?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    recipe?.nameLocal?.[currentLanguage] && recipe?.nameLocal?.[currentLanguage]?.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':return 'text-success';
      case 'medium':return 'text-warning';
      case 'hard':return 'text-error';
      default:return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border heritage-shadow p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-poppins font-semibold text-foreground mb-2">
          {t?.title}
        </h2>
        <p className="text-sm text-muted-foreground font-inter">
          {t?.subtitle}
        </p>
      </div>
      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t?.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent organic-transition" />

          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(t?.categories)?.map(([key, label]) =>
          <Button
            key={key}
            variant={selectedCategory === key ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(key)}
            className="font-inter">

              {label}
            </Button>
          )}
        </div>
      </div>
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes?.map((recipe) =>
        <div key={recipe?.id} className="bg-muted/20 rounded-lg overflow-hidden border border-border organic-transition hover:heritage-shadow group">
            {/* Recipe Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
              src={recipe?.image}
              alt={recipe?.alt}
              className="w-full h-full object-cover group-hover:scale-105 organic-transition" />

              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium bg-card/90 ${getDifficultyColor(recipe?.difficulty)}`}>
                  {t?.difficulty?.[recipe?.difficulty]}
                </span>
              </div>
            </div>

            {/* Recipe Content */}
            <div className="p-4">
              <div className="mb-3">
                <h3 className="font-poppins font-semibold text-foreground mb-1">
                  {currentLanguage !== 'en' && recipe?.nameLocal?.[currentLanguage] ?
                recipe?.nameLocal?.[currentLanguage] :
                recipe?.name}
                </h3>
                <p className="text-xs text-muted-foreground font-inter leading-relaxed">
                  {recipe?.description}
                </p>
              </div>

              {/* Recipe Stats */}
              <div className="flex items-center justify-between text-xs text-muted-foreground font-inter mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{recipe?.cookingTime} {t?.cookingTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{recipe?.servings} {t?.servings}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Zap" size={14} />
                  <span>{recipe?.calories} {t?.calories}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {recipe?.tags?.slice(0, 3)?.map((tag, index) =>
              <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-inter">
                    {tag}
                  </span>
              )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => onRecipeSelect && onRecipeSelect(recipe)}>

                  {t?.viewRecipe}
                </Button>
                <Button
                variant="default"
                size="sm"
                fullWidth>

                  {t?.addToPlan}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* No Results */}
      {filteredRecipes?.length === 0 &&
      <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-poppins font-semibold text-foreground mb-2">
            {currentLanguage === 'en' ? 'No recipes found' :
          currentLanguage === 'si' ? 'වට්ටෝරු හමු නොවීය' : 'செய்முறைகள் கிடைக்கவில்லை'}
          </h3>
          <p className="text-sm text-muted-foreground font-inter">
            {currentLanguage === 'en' ? 'Try adjusting your search or filters' :
          currentLanguage === 'si' ? 'ඔබේ සෙවීම හෝ පෙරහන් වෙනස් කිරීමට උත්සාහ කරන්න' : 'உங்கள் தேடல் அல்லது வடிப்பான்களை சரிசெய்ய முயற்சிக்கவும்'}
          </p>
        </div>
      }
    </div>);

};

export default RecipeLibrary;