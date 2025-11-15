import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NutritionTracker = ({ currentLanguage, selectedDate }) => {
  const [activeTab, setActiveTab] = useState('daily');

  const translations = {
    en: {
      title: "Nutrition Tracker",
      subtitle: "Monitor your daily nutritional intake",
      tabs: {
        daily: 'Daily',
        weekly: 'Weekly',
        goals: 'Goals'
      },
      nutrients: {
        calories: 'Calories',
        protein: 'Protein',
        carbs: 'Carbohydrates',
        fat: 'Fat',
        fiber: 'Fiber',
        sodium: 'Sodium'
      },
      units: {
        calories: 'kcal',
        protein: 'g',
        carbs: 'g',
        fat: 'g',
        fiber: 'g',
        sodium: 'mg'
      },
      status: {
        excellent: 'Excellent',
        good: 'Good',
        needs_attention: 'Needs Attention'
      },
      recommendations: 'Recommendations',
      addFood: 'Add Food',
      viewDetails: 'View Details'
    },
    si: {
      title: "පෝෂණ ට්‍රැකරය",
      subtitle: "ඔබේ දෛනික පෝෂණ ප්‍රමාණය නිරීක්ෂණය කරන්න",
      tabs: {
        daily: 'දෛනික',
        weekly: 'සතිපතා',
        goals: 'ඉලක්ක'
      },
      nutrients: {
        calories: 'කැලරි',
        protein: 'ප්‍රෝටීන්',
        carbs: 'කාබෝහයිඩ්‍රේට්',
        fat: 'මේදය',
        fiber: 'තන්තු',
        sodium: 'සෝඩියම්'
      },
      units: {
        calories: 'කැලරි',
        protein: 'ග්‍රෑම්',
        carbs: 'ග්‍රෑම්',
        fat: 'ග්‍රෑම්',
        fiber: 'ග්‍රෑම්',
        sodium: 'මිග්‍රෑ'
      },
      status: {
        excellent: 'විශිෂ්ට',
        good: 'හොඳ',
        needs_attention: 'අවධානය අවශ්‍ය'
      },
      recommendations: 'නිර්දේශ',
      addFood: 'ආහාර එක් කරන්න',
      viewDetails: 'විස්තර බලන්න'
    },
    ta: {
      title: "ஊட்டச்சத்து கண்காணிப்பு",
      subtitle: "உங்கள் தினசரி ஊட்டச்சத்து உட்கொள்ளலைக் கண்காணிக்கவும்",
      tabs: {
        daily: 'தினசரி',
        weekly: 'வாராந்திர',
        goals: 'இலக்குகள்'
      },
      nutrients: {
        calories: 'கலோரிகள்',
        protein: 'புரதம்',
        carbs: 'கார்போஹைட்ரேட்',
        fat: 'கொழுப்பு',
        fiber: 'நார்ச்சத்து',
        sodium: 'சோடியம்'
      },
      units: {
        calories: 'கலோரி',
        protein: 'கிராம்',
        carbs: 'கிராம்',
        fat: 'கிராம்',
        fiber: 'கிராம்',
        sodium: 'மிகி'
      },
      status: {
        excellent: 'சிறந்த',
        good: 'நல்ல',
        needs_attention: 'கவனம் தேவை'
      },
      recommendations: 'பரிந்துரைகள்',
      addFood: 'உணவு சேர்க்க',
      viewDetails: 'விவரங்கள் பார்க்க'
    }
  };

  const mockNutritionData = {
    daily: {
      calories: { current: 1850, target: 2000, percentage: 92.5 },
      protein: { current: 75, target: 80, percentage: 93.8 },
      carbs: { current: 220, target: 250, percentage: 88 },
      fat: { current: 65, target: 70, percentage: 92.9 },
      fiber: { current: 28, target: 35, percentage: 80 },
      sodium: { current: 1800, target: 2300, percentage: 78.3 }
    },
    recommendations: [
      {
        type: 'positive',
        message: 'Great protein intake! Your dal and fish curry provided excellent quality protein.',
        icon: 'CheckCircle'
      },
      {
        type: 'suggestion',
        message: 'Add more leafy greens like gotukola or mukunuwenna to increase fiber intake.',
        icon: 'Leaf'
      },
      {
        type: 'warning',
        message: 'Consider reducing salt in your curry preparations to meet sodium goals.',
        icon: 'AlertTriangle'
      }
    ]
  };

  const t = translations?.[currentLanguage];
  const nutritionData = mockNutritionData?.daily;

  const getNutrientStatus = (percentage) => {
    if (percentage >= 90) return { status: 'excellent', color: 'text-success' };
    if (percentage >= 70) return { status: 'good', color: 'text-primary' };
    return { status: 'needs_attention', color: 'text-warning' };
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'bg-success';
    if (percentage >= 70) return 'bg-primary';
    return 'bg-warning';
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
        
        <Button variant="default" size="sm" className="mt-4 sm:mt-0">
          <Icon name="Plus" size={16} className="mr-2" />
          {t?.addFood}
        </Button>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {Object.entries(t?.tabs)?.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 px-4 py-2 text-sm font-inter font-medium rounded-md organic-transition ${
              activeTab === key
                ? 'bg-card text-foreground heritage-shadow'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Nutrition Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.entries(nutritionData)?.map(([nutrient, data]) => {
          const status = getNutrientStatus(data?.percentage);
          const progressColor = getProgressColor(data?.percentage);
          
          return (
            <div key={nutrient} className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-poppins font-medium text-foreground">
                  {t?.nutrients?.[nutrient]}
                </span>
                <span className={`text-xs font-inter ${status?.color}`}>
                  {t?.status?.[status?.status]}
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-poppins font-semibold text-foreground">
                  {data?.current}
                </span>
                <span className="text-sm text-muted-foreground font-inter">
                  / {data?.target} {t?.units?.[nutrient]}
                </span>
              </div>
              <div className="w-full bg-border rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full organic-transition ${progressColor}`}
                  style={{ width: `${Math.min(data?.percentage, 100)}%` }}
                ></div>
              </div>
              <div className="text-xs text-muted-foreground font-inter text-center">
                {data?.percentage?.toFixed(1)}% of daily goal
              </div>
            </div>
          );
        })}
      </div>
      {/* Recommendations */}
      <div className="bg-muted/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Lightbulb" size={20} className="text-accent" />
          <h3 className="font-poppins font-semibold text-foreground">
            {t?.recommendations}
          </h3>
        </div>
        
        <div className="space-y-3">
          {mockNutritionData?.recommendations?.map((rec, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon
                name={rec?.icon}
                size={16}
                className={`mt-0.5 flex-shrink-0 ${
                  rec?.type === 'positive' ?'text-success'
                    : rec?.type === 'warning' ?'text-warning' :'text-primary'
                }`}
              />
              <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                {rec?.message}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Button variant="outline" size="sm" fullWidth>
            {t?.viewDetails}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NutritionTracker;