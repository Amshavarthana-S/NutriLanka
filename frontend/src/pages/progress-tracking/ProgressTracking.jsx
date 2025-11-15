import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import HealthMetricsCard from './components/HealthMetricsCard';
import ProgressChart from './components/ProgressChart';
import AchievementBadge from './components/AchievementBadge';
import WeeklyReportCard from './components/WeeklyReportCard';
import GoalCard from './components/GoalCard';
import Header from '../../components/ui/Header';

const ProgressTracking = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('weight');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock health metrics data
  const healthMetrics = [
  {
    metric: "Weight",
    value: 68.5,
    unit: "kg",
    change: -2.3,
    trend: "down",
    icon: "Scale",
    color: "bg-primary"
  },
  {
    metric: "Blood Sugar",
    value: 95,
    unit: "mg/dL",
    change: -8.2,
    trend: "down",
    icon: "Droplet",
    color: "bg-destructive"
  },
  {
    metric: "Energy Level",
    value: 8.2,
    unit: "/10",
    change: 15.4,
    trend: "up",
    icon: "Zap",
    color: "bg-warning"
  },
  {
    metric: "Cultural Wellness",
    value: 92,
    unit: "%",
    change: 5.7,
    trend: "up",
    icon: "Heart",
    color: "bg-success"
  }];


  // Mock chart data
  const weightData = [
  { date: "Nov 1", value: 70.2 },
  { date: "Nov 3", value: 69.8 },
  { date: "Nov 5", value: 69.5 },
  { date: "Nov 7", value: 69.1 },
  { date: "Nov 9", value: 68.9 },
  { date: "Nov 11", value: 68.7 },
  { date: "Nov 13", value: 68.5 }];


  const bloodSugarData = [
  { date: "Nov 1", value: 105 },
  { date: "Nov 3", value: 102 },
  { date: "Nov 5", value: 98 },
  { date: "Nov 7", value: 96 },
  { date: "Nov 9", value: 94 },
  { date: "Nov 11", value: 96 },
  { date: "Nov 13", value: 95 }];


  // Mock achievements data
  const achievements = [
  {
    id: 1,
    title: "Rice Portion Master",
    description: "Maintained proper rice portions for 7 days",
    icon: "Award",
    isUnlocked: true
  },
  {
    id: 2,
    title: "Curry Leaf Champion",
    description: "Used curry leaves in 10 meals",
    icon: "Leaf",
    isUnlocked: true
  },
  {
    id: 3,
    title: "Traditional Breakfast",
    description: "7 days of traditional Sri Lankan breakfast",
    icon: "Sunrise",
    isUnlocked: false
  },
  {
    id: 4,
    title: "Coconut Balance",
    description: "Balanced coconut usage for a month",
    icon: "Circle",
    isUnlocked: false
  },
  {
    id: 5,
    title: "Spice Wisdom",
    description: "Used 15 different traditional spices",
    icon: "Star",
    isUnlocked: true
  },
  {
    id: 6,
    title: "Family Meal Hero",
    description: "Cooked healthy family meals for 2 weeks",
    icon: "Users",
    isUnlocked: false
  }];


  // Mock photo progress data
  const progressPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1598881617056-5b0a88d4cc6b",
    alt: "Progress photo showing person in casual clothes standing against white wall",
    date: "Nov 1, 2024",
    weight: 70.2,
    notes: "Starting my journey"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1708011108776-45ad9e625269",
    alt: "Progress photo showing person in workout attire with confident pose",
    date: "Nov 7, 2024",
    weight: 69.1,
    notes: "Feeling stronger"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1620282548158-aaf65996afd2",
    alt: "Progress photo showing person in fitted clothing with improved posture",
    date: "Nov 14, 2024",
    weight: 68.5,
    notes: "Great progress!"
  }];


  // Mock family members data
  const familyMembers = [
  {
    id: 1,
    name: "Amara Perera",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_106c8b07a-1762248950041.png",
    avatarAlt: "Professional headshot of Sri Lankan woman with long black hair smiling warmly",
    progress: 85,
    currentGoal: "Weight Management",
    streak: 12,
    isOnline: true
  },
  {
    id: 2,
    name: "Kasun Silva",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_106c8b07a-1762248950041.png",
    avatarAlt: "Professional headshot of Sri Lankan man with short black hair in casual shirt",
    progress: 72,
    currentGoal: "Diabetes Control",
    streak: 8,
    isOnline: false
  },
  {
    id: 3,
    name: "Nimal Fernando",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8c8b3e7-1762249130876.png",
    avatarAlt: "Professional headshot of middle-aged Sri Lankan man with glasses and friendly smile",
    progress: 91,
    currentGoal: "Heart Health",
    streak: 15,
    isOnline: true
  }];


  // Mock weekly report data
  const weeklyReport = {
    weekRange: "Nov 7 - Nov 14, 2024",
    overallScore: 87,
    highlights: [
    {
      type: "achievement",
      title: "Excellent Traditional Meal Balance",
      description: "You maintained perfect balance of rice, curry, and vegetables in 6 out of 7 days"
    },
    {
      type: "improvement",
      title: "Blood Sugar Stability",
      description: "Your post-meal blood sugar levels improved by 12% this week"
    },
    {
      type: "attention",
      title: "Hydration Goal",
      description: "Consider increasing water intake between meals for better digestion"
    }],

    stats: {
      mealsLogged: 18,
      exerciseDays: 5,
      culturalMeals: 14
    }
  };

  // Mock goals data
  const healthGoals = [
  {
    id: 1,
    title: "Weight Management",
    description: "Reach target weight through traditional Sri Lankan diet",
    icon: "Target",
    color: "bg-primary",
    progress: 76,
    current: 68.5,
    target: 65,
    unit: "kg",
    targetDate: "2024-12-31",
    streak: 12,
    milestones: [
    "Lost 2kg in first month",
    "Maintained portion control for 2 weeks"]

  },
  {
    id: 2,
    title: "Blood Sugar Control",
    description: "Maintain healthy blood sugar with cultural foods",
    icon: "Activity",
    color: "bg-destructive",
    progress: 89,
    current: 95,
    target: 90,
    unit: "mg/dL",
    targetDate: "2024-11-30",
    streak: 8,
    milestones: [
    "Reduced sugar by 15mg/dL",
    "Consistent morning readings"]

  }];


  const handleAddPhoto = () => {
    console.log("Add photo functionality");
  };

  const handleInviteMember = () => {
    console.log("Invite family member functionality");
  };

  const handleViewFullReport = () => {
    console.log("View full report functionality");
  };

  const handleUpdateGoal = (goalId) => {
    console.log("Update goal:", goalId);
  };

  const handleCompleteGoal = (goalId) => {
    console.log("Complete goal:", goalId);
  };

  const handleAchievementClick = (achievement) => {
    console.log("Achievement clicked:", achievement);
  };

  const getChartData = () => {
    switch (selectedMetric) {
      case 'bloodSugar':
        return bloodSugarData;
      default:
        return weightData;
    }
  };

  const getChartTitle = () => {
    switch (selectedMetric) {
      case 'bloodSugar':
        return 'Blood Sugar Trends';
      default:
        return 'Weight Progress';
    }
  };

  const getChartColor = () => {
    switch (selectedMetric) {
      case 'bloodSugar':
        return '#D67B47';
      default:
        return '#D4A574';
    }
  };

  const getChartUnit = () => {
    switch (selectedMetric) {
      case 'bloodSugar':
        return ' mg/dL';
      default:
        return 'kg';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header/>
      {/* Header */}
      <div className="bg-card border-b border-border heritage-shadow pt-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground font-poppins">
                Progress Tracking
              </h1>
              <p className="text-muted-foreground mt-2">
                Monitor your health journey with culturally-relevant metrics and celebrations
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
                {['week', 'month', 'year']?.map((range) =>
                <button
                  key={range}
                  onClick={() => setSelectedTimeRange(range)}
                  className={`px-3 py-1 rounded-md text-sm font-medium organic-transition ${
                  selectedTimeRange === range ?
                  'bg-primary text-primary-foreground' :
                  'text-muted-foreground hover:text-foreground'}`
                  }>

                    {range?.charAt(0)?.toUpperCase() + range?.slice(1)}
                  </button>
                )}
              </div>
              
              <Button variant="default" iconName="Download" iconPosition="left">
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Health Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics?.map((metric, index) =>
          <HealthMetricsCard key={index} {...metric} />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Progress Chart */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-foreground font-poppins">
                  Health Trends
                </h2>
                <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
                  {[
                  { key: 'weight', label: 'Weight' },
                  { key: 'bloodSugar', label: 'Blood Sugar' }]?.
                  map((metric) =>
                  <button
                    key={metric?.key}
                    onClick={() => setSelectedMetric(metric?.key)}
                    className={`px-3 py-1 rounded-md text-sm font-medium organic-transition ${
                    selectedMetric === metric?.key ?
                    'bg-primary text-primary-foreground' :
                    'text-muted-foreground hover:text-foreground'}`
                    }>

                      {metric?.label}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <ProgressChart
              data={getChartData()}
              title={getChartTitle()}
              color={getChartColor()}
              unit={getChartUnit()} />

          </div>

          {/* Weekly Report */}
          <div>
            <WeeklyReportCard
              report={weeklyReport}
              onViewFullReport={handleViewFullReport} />

          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground font-poppins">
              Health Goals
            </h2>
            <Button variant="outline" iconName="Plus" iconPosition="left">
              Add Goal
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthGoals?.map((goal) =>
            <GoalCard
              key={goal?.id}
              goal={goal}
              onUpdateGoal={handleUpdateGoal}
              onCompleteGoal={handleCompleteGoal} />

            )}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground font-poppins">
                Cultural Wellness Achievements
              </h2>
              <p className="text-muted-foreground">
                Celebrate your journey with traditional food wisdom milestones
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" size={20} className="text-warning" />
              <span className="text-sm font-medium text-foreground">
                {achievements?.filter((a) => a?.isUnlocked)?.length} / {achievements?.length} Unlocked
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements?.map((achievement) =>
            <AchievementBadge
              key={achievement?.id}
              achievement={achievement}
              isUnlocked={achievement?.isUnlocked}
              onClick={() => handleAchievementClick(achievement)} />

            )}
          </div>
        </div>
      </div>
    </div>);

};

export default ProgressTracking;