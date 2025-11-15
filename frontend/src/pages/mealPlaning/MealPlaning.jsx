import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import MealPlanningHeader from "./components/MealPlanningHeader";
import HealthGoalSelector from "./components/HealthGoalSelector";
import MealPlanCalendar from "./components/MealPlanCalendar";
import NutritionTracker from "./components/NutritionTracker";
import RecipeLibrary from "./components/RecipeLibrary";
import GroceryListGenerator from "./components/GroceryListGenerator";
import Header from "../../components/ui/Header";

const LANGUAGE_KEY = "nutrilanka-language";
const MEAL_PLANNING_KEY = "nutrilanka-meal-planning"; // JSON store key

const MealPlaning = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedGoals, setSelectedGoals] = useState(["weight-management"]);
  const [activeTab, setActiveTab] = useState("planner");
  const [mealPlans, setMealPlans] = useState({}); // { [dateKey]: { breakfast: ..., lunch: ... } }

  // ---------- LOAD FROM localStorage ONCE (language + meal planning JSON) ----------
  useEffect(() => {
    // Language
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage && ["en", "si", "ta"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }

    // Meal planning JSON
    const savedStateRaw = localStorage.getItem(MEAL_PLANNING_KEY);
    if (savedStateRaw) {
      try {
        const savedState = JSON.parse(savedStateRaw);

        if (savedState.selectedGoals) {
          setSelectedGoals(savedState.selectedGoals);
        }
        if (savedState.selectedDate) {
          setSelectedDate(new Date(savedState.selectedDate));
        }
        if (savedState.activeTab) {
          setActiveTab(savedState.activeTab);
        }
        if (savedState.mealPlans && typeof savedState.mealPlans === "object") {
          setMealPlans(savedState.mealPlans);
        }
      } catch (err) {
        console.error("Failed to parse meal planning JSON:", err);
      }
    }
  }, []);

  // ---------- SAVE TO localStorage WHEN STATE CHANGES ----------
  useEffect(() => {
    const payload = {
      selectedGoals,
      selectedDate: selectedDate.toISOString(),
      activeTab,
      mealPlans,
    };

    localStorage.setItem(MEAL_PLANNING_KEY, JSON.stringify(payload));
  }, [selectedGoals, selectedDate, activeTab, mealPlans]);

  // Language change handler (already partly done)
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem(LANGUAGE_KEY, language);
  };

  // Helper: consistent key for each date (YYYY-MM-DD)
  const getDateKey = (date) => {
    if (!(date instanceof Date)) return "";
    return date.toISOString().slice(0, 10);
  };

  // Core function: update meal plan (this is what "stores JSON data")
  const handleMealPlanChange = (date, newPlan) => {
    const dateKey = getDateKey(date);
    setMealPlans((prev) => ({
      ...prev,
      [dateKey]: {
        ...(prev[dateKey] || {}),
        ...newPlan,
      },
    }));
  };

  const translations = {
    en: {
      pageTitle: "Meal Planning - NutriLanka",
      pageDescription:
        "Create personalized meal plans that honor your Sri Lankan heritage while achieving your health goals",
      tabs: {
        planner: "Meal Planner",
        nutrition: "Nutrition Tracker",
        recipes: "Recipe Library",
        grocery: "Grocery List",
      },
    },
    si: {
      pageTitle: "ආහාර සැලසුම් - NutriLanka",
      pageDescription:
        "ඔබේ සෞඛ්‍ය ඉලක්ක සාක්ෂාත් කර ගනිමින් ඔබේ ශ්‍රී ලාංකික උරුමයට ගරු කරන පුද්ගලික ආහාර සැලසුම් සාදන්න",
      tabs: {
        planner: "ආහාර සැලසුම්කරු",
        nutrition: "පෝෂණ ට්‍රැකරය",
        recipes: "වට්ටෝරු පුස්තකාලය",
        grocery: "සාප්පු ලැයිස්තුව",
      },
    },
    ta: {
      pageTitle: "உணவு திட்டமிடல் - NutriLanka",
      pageDescription:
        "உங்கள் உடல்நல இலக்குகளை அடைந்து கொண்டே உங்கள் இலங்கை பாரம்பரியத்தை மதிக்கும் தனிப்பட்ட உணவு திட்டங்களை உருவாக்குங்கள்",
      tabs: {
        planner: "உணவு திட்டமிடுபவர்",
        nutrition: "ஊட்டச்சத்து கண்காணிப்பு",
        recipes: "செய்முறை நூலகம்",
        grocery: "மளிகை பட்டியல்",
      },
    },
  };

  const t = translations[currentLanguage];

  const mockUserData = {
    name:
      currentLanguage === "si"
        ? "සමන්"
        : currentLanguage === "ta"
        ? "சமன்"
        : "Saman",
    email: "saman@example.com",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "planner":
        return (
          <div className="space-y-6">
            <HealthGoalSelector
              currentLanguage={currentLanguage}
              selectedGoals={selectedGoals}
              onGoalChange={setSelectedGoals}
            />
            <MealPlanCalendar
              currentLanguage={currentLanguage}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              mealPlans={mealPlans}
              onMealPlanChange={handleMealPlanChange} // <-- use this inside the calendar
            />
          </div>
        );
      case "nutrition":
        return (
          <NutritionTracker
            currentLanguage={currentLanguage}
            selectedDate={selectedDate}
            mealPlans={mealPlans}
          />
        );
      case "recipes":
        return (
          <RecipeLibrary
            currentLanguage={currentLanguage}
            onRecipeSelect={(recipe) =>
              console.log("Selected recipe:", recipe)
            }
          />
        );
      case "grocery":
        return (
          <GroceryListGenerator
            currentLanguage={currentLanguage}
            mealPlan={mealPlans[getDateKey(selectedDate)] || {}}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-background pt-16">
        {/* Header */}
        <MealPlanningHeader
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          userName={mockUserData.name}
        />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 bg-muted p-2 rounded-lg">
              {Object.entries(t.tabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 min-w-[120px] px-4 py-3 text-sm font-inter font-medium rounded-md organic-transition ${
                    activeTab === key
                      ? "bg-card text-foreground heritage-shadow"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-coconut-reveal">{renderTabContent()}</div>
        </div>

        {/* Cultural Pattern Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="cultural-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="2"
                  fill="currentColor"
                  opacity="0.1"
                />
                <path
                  d="M5,5 Q10,0 15,5 Q10,10 5,5"
                  fill="currentColor"
                  opacity="0.05"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cultural-pattern)" />
          </svg>
        </div>
      </div>
      <style jsx>{`
        @keyframes spice-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes cultural-breathe {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes coconut-reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heritage-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(212, 165, 116, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(212, 165, 116, 0.5);
          }
        }

        .animate-spice-rotate {
          animation: spice-rotate 20s linear infinite;
        }

        .animate-cultural-breathe {
          animation: cultural-breathe 3s ease-in-out infinite;
        }

        .animate-coconut-reveal {
          animation: coconut-reveal 0.6s ease-out;
        }

        .animate-heritage-glow {
          animation: heritage-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default MealPlaning;
