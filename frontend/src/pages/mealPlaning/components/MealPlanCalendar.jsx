import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MealPlanCalendar = ({ currentLanguage, selectedDate, onDateChange, mealPlans }) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const translations = {
    en: {
      title: "Weekly Meal Calendar",
      subtitle: "Drag and drop meals to plan your week",
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      meals: {
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        dinner: 'Dinner',
        snack: 'Snack'
      },
      addMeal: 'Add Meal',
      viewRecipe: 'View Recipe',
      calories: 'cal',
      previousWeek: 'Previous Week',
      nextWeek: 'Next Week',
      today: 'Today'
    },
    si: {
      title: "සතිපතා ආහාර දින දර්ශනය",
      subtitle: "ඔබේ සතිය සැලසුම් කිරීමට ආහාර ඇදගෙන යන්න",
      days: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
      dayShort: ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන'],
      meals: {
        breakfast: 'උදෑසන ආහාරය',
        lunch: 'දිවා ආහාරය',
        dinner: 'රාත්‍රී ආහාරය',
        snack: 'කෙටි ආහාරය'
      },
      addMeal: 'ආහාරය එක් කරන්න',
      viewRecipe: 'වට්ටෝරුව බලන්න',
      calories: 'කැලරි',
      previousWeek: 'පෙර සතිය',
      nextWeek: 'ඊළඟ සතිය',
      today: 'අද'
    },
    ta: {
      title: "வாராந்திர உணவு நாட்காட்டி",
      subtitle: "உங்கள் வாரத்தை திட்டமிட உணவுகளை இழுத்து விடுங்கள்",
      days: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
      dayShort: ['ஞாயி', 'திங்', 'செவ்', 'புத', 'வியா', 'வெள்', 'சனி'],
      meals: {
        breakfast: 'காலை உணவு',
        lunch: 'மதிய உணவு',
        dinner: 'இரவு உணவு',
        snack: 'சிற்றுண்டி'
      },
      addMeal: 'உணவு சேர்க்க',
      viewRecipe: 'செய்முறை பார்க்க',
      calories: 'கலோரி',
      previousWeek: 'முந்தைய வாரம்',
      nextWeek: 'அடுத்த வாரம்',
      today: 'இன்று'
    }
  };

  const mockMealPlans = {
    '2025-11-14': {
      breakfast: { name: 'Kiribath with Lunu Miris', calories: 320, image: "https://images.unsplash.com/photo-1705234384751-84081009588e", alt: 'Traditional Sri Lankan milk rice with spicy coconut sambol on banana leaf' },
      lunch: { name: 'Rice and Curry', calories: 450, image: "https://images.unsplash.com/photo-1733415316395-43859f2ba0f6", alt: 'Colorful Sri Lankan rice and curry spread with multiple vegetable dishes' },
      dinner: { name: 'String Hoppers with Dhal', calories: 380, image: "https://images.unsplash.com/photo-1601532437517-d2251f063e67", alt: 'Steamed string hoppers served with yellow lentil curry and coconut sambol' }
    },
    '2025-11-15': {
      breakfast: { name: 'Hoppers with Egg', calories: 290, image: "https://images.unsplash.com/photo-1708706120190-56d62218dd37", alt: 'Bowl-shaped Sri Lankan hoppers with fried egg in center on wooden plate' },
      lunch: { name: 'Kottu Roti', calories: 520, image: "https://images.unsplash.com/photo-1663863220539-c9083bf48b9c", alt: 'Chopped roti stir-fried with vegetables and spices in traditional kottu style' },
      snack: { name: 'Coconut Roti', calories: 180, image: "https://images.unsplash.com/photo-1706771219650-498d7cd77b63", alt: 'Fresh coconut roti flatbread with grated coconut filling on banana leaf' }
    }
  };

  const t = translations?.[currentLanguage];

  const getWeekDates = (startDate) => {
    const week = [];
    const start = new Date(startDate);
    start?.setDate(start?.getDate() - start?.getDay());

    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date?.setDate(start?.getDate() + i);
      week?.push(date);
    }
    return week;
  };

  const weekDates = getWeekDates(currentWeek);
  const today = new Date();

  const formatDate = (date) => {
    return date?.toISOString()?.split('T')?.[0];
  };

  const isToday = (date) => {
    return formatDate(date) === formatDate(today);
  };

  const navigateWeek = (direction) => {
    const newWeek = new Date(currentWeek);
    newWeek?.setDate(currentWeek?.getDate() + direction * 7);
    setCurrentWeek(newWeek);
  };

  const goToToday = () => {
    setCurrentWeek(new Date());
  };

  return (
    <div className="bg-card rounded-lg border border-border heritage-shadow p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl font-poppins font-semibold text-foreground mb-2">
            {t?.title}
          </h2>
          <p className="text-sm text-muted-foreground font-inter">
            {t?.subtitle}
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek(-1)}>

            <Icon name="ChevronLeft" size={16} />
            <span className="hidden sm:inline ml-1">{t?.previousWeek}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={goToToday}
            className="font-poppins">

            {t?.today}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek(1)}>

            <span className="hidden sm:inline mr-1">{t?.nextWeek}</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {weekDates?.map((date, index) => {
          const dateKey = formatDate(date);
          const dayMeals = mockMealPlans?.[dateKey] || {};
          const isSelected = formatDate(date) === formatDate(selectedDate);

          return (
            <div
              key={dateKey}
              className={`border rounded-lg p-4 organic-transition cursor-pointer ${
              isSelected ?
              'border-primary bg-primary/5' :
              isToday(date) ?
              'border-accent bg-accent/5' : 'border-border hover:border-primary/50'}`
              }
              onClick={() => onDateChange(date)}>

              {/* Day Header */}
              <div className="text-center mb-4">
                <div className="text-xs text-muted-foreground font-inter mb-1">
                  {t?.dayShort?.[index]}
                </div>
                <div className={`text-lg font-poppins font-semibold ${
                isToday(date) ? 'text-accent' : 'text-foreground'}`
                }>
                  {date?.getDate()}
                </div>
                {isToday(date) &&
                <div className="w-2 h-2 bg-accent rounded-full mx-auto mt-1"></div>
                }
              </div>
              {/* Meals */}
              <div className="space-y-3">
                {['breakfast', 'lunch', 'dinner', 'snack']?.map((mealType) => {
                  const meal = dayMeals?.[mealType];

                  return (
                    <div key={mealType} className="min-h-[60px]">
                      <div className="text-xs text-muted-foreground font-inter mb-1">
                        {t?.meals?.[mealType]}
                      </div>
                      {meal ?
                      <div className="bg-muted/50 rounded-lg p-2 group hover:bg-muted organic-transition">
                          <div className="flex items-center space-x-2">
                            <img
                            src={meal?.image}
                            alt={meal?.alt}
                            className="w-8 h-8 rounded object-cover flex-shrink-0" />

                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-foreground truncate">
                                {meal?.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {meal?.calories} {t?.calories}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2 opacity-0 group-hover:opacity-100 organic-transition">
                            <Button variant="ghost" size="xs" className="text-xs">
                              {t?.viewRecipe}
                            </Button>
                            <Icon name="MoreHorizontal" size={12} className="text-muted-foreground" />
                          </div>
                        </div> :

                      <button className="w-full h-12 border-2 border-dashed border-border rounded-lg flex items-center justify-center organic-transition hover:border-primary/50 hover:bg-primary/5 group">
                          <Icon name="Plus" size={16} className="text-muted-foreground group-hover:text-primary" />
                        </button>
                      }
                    </div>);

                })}
              </div>
            </div>);

        })}
      </div>
    </div>);

};

export default MealPlanCalendar;