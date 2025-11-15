import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MealPlanningHeader = ({ currentLanguage, onLanguageChange, userName }) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' }
  ];

  const translations = {
    en: {
      title: "Meal Planning Dashboard",
      subtitle: "Create personalized meal plans that honor your heritage",
      welcome: `Welcome back, ${userName}`,
      todayDate: "Today: November 14, 2025"
    },
    si: {
      title: "ආහාර සැලසුම් පුවරුව",
      subtitle: "ඔබේ උරුමයට ගරු කරන පුද්ගලික ආහාර සැලසුම් සාදන්න",
      welcome: `නැවත සාදරයෙන් පිළිගනිමු, ${userName}`,
      todayDate: "අද: නොවැම්බර් 14, 2025"
    },
    ta: {
      title: "உணவு திட்டமிடல் டாஷ்போர்டு",
      subtitle: "உங்கள் பாரம்பரியத்தை மதிக்கும் தனிப்பட்ட உணவு திட்டங்களை உருவாக்குங்கள்",
      welcome: `மீண்டும் வரவேற்கிறோம், ${userName}`,
      todayDate: "இன்று: நவம்பர் 14, 2025"
    }
  };

  const t = translations?.[currentLanguage];

  return (
    <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Main Header Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Calendar" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-poppins font-bold text-foreground">
                  {t?.title}
                </h1>
                <p className="text-sm text-muted-foreground font-inter">
                  {t?.subtitle}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{t?.welcome}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t?.todayDate}</span>
            </div>
          </div>

          {/* Language Selector & Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="min-w-[120px] justify-between"
              >
                <span className="flex items-center space-x-2">
                  <span>{languages?.find(lang => lang?.code === currentLanguage)?.flag}</span>
                  <span className="font-inter">{languages?.find(lang => lang?.code === currentLanguage)?.name}</span>
                </span>
                <Icon name="ChevronDown" size={16} />
              </Button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg heritage-shadow z-50">
                  {languages?.map((language) => (
                    <button
                      key={language?.code}
                      onClick={() => {
                        onLanguageChange(language?.code);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left organic-transition ${
                        currentLanguage === language?.code
                          ? 'bg-primary text-primary-foreground'
                          : 'text-popover-foreground hover:bg-muted'
                      } first:rounded-t-lg last:rounded-b-lg`}
                    >
                      <span>{language?.flag}</span>
                      <span className="font-inter">{language?.name}</span>
                      {currentLanguage === language?.code && (
                        <Icon name="Check" size={16} className="ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <Button variant="default" size="sm" className="font-poppins">
              <Icon name="Plus" size={16} className="mr-2" />
              New Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanningHeader;