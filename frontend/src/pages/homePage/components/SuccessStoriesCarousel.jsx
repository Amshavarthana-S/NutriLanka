import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
  {
    id: 1,
    name: "Priya Wickramasinghe",
    age: 34,
    location: "Colombo",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106c8b07a-1762248950041.png",
    alt: "Professional Sri Lankan woman with shoulder-length black hair smiling warmly at camera",
    achievement: "Lost 15kg while enjoying traditional foods",
    story: `I thought I had to give up rice and curry to lose weight. NutriLanka showed me how to enjoy my favorite dishes in healthier portions. The traditional breakfast options helped me start each day with energy, and I never felt like I was on a restrictive diet.`,
    healthGoal: "Weight Management",
    timeframe: "6 months",
    favoriteFeature: "Meal Planning with Cultural Foods",
    beforeAfter: {
      before: "78kg",
      after: "63kg",
      healthScore: "+40 points"
    }
  },
  {
    id: 2,
    name: "Roshan Fernando",
    age: 42,
    location: "Kandy",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106c8b07a-1762248950041.png",
    alt: "Middle-aged Sri Lankan man with short black hair and friendly smile in casual shirt",
    achievement: "Managed diabetes with traditional Sri Lankan diet",
    story: `As a diabetic, I was told to avoid rice completely. NutriLanka's expert guidance helped me understand portion control and timing. Now I enjoy red rice with my favorite curries while maintaining perfect blood sugar levels.`,
    healthGoal: "Diabetes Management",
    timeframe: "8 months",
    favoriteFeature: "Expert Consultation & Blood Sugar Tracking",
    beforeAfter: {
      before: "HbA1c: 8.2%",
      after: "HbA1c: 6.1%",
      healthScore: "+55 points"
    }
  },
  {
    id: 3,
    name: "Anjali Perera",
    age: 28,
    location: "Galle",
    image: "https://images.unsplash.com/photo-1570406794469-630903944dc1",
    alt: "Young Sri Lankan woman with long dark hair and bright smile wearing traditional jewelry",
    achievement: "Improved energy levels for demanding job",
    story: `Working long hours as a software engineer, I was always tired and relied on unhealthy snacks. The traditional breakfast recipes and energy-boosting lunch combinations from my region transformed my productivity and mood completely.`,
    healthGoal: "Energy & Performance",
    timeframe: "4 months",
    favoriteFeature: "Regional Food Discovery & Quick Recipes",
    beforeAfter: {
      before: "Low Energy",
      after: "High Performance",
      healthScore: "+35 points"
    }
  },
  {
    id: 4,
    name: "Mahesh Rajapaksa",
    age: 55,
    location: "Jaffna",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14e0a8ec8-1762274237848.png",
    alt: "Mature Sri Lankan man with graying hair and warm expression wearing white shirt",
    achievement: "Lowered cholesterol with heart-healthy traditional foods",
    story: `My doctor recommended a Mediterranean diet, but I missed my cultural foods. NutriLanka helped me discover the heart-healthy benefits of traditional Jaffna cuisine. My cholesterol dropped significantly while enjoying the foods I grew up with.`,
    healthGoal: "Heart Health",
    timeframe: "10 months",
    favoriteFeature: "Heart-Healthy Traditional Recipes",
    beforeAfter: {
      before: "Cholesterol: 280",
      after: "Cholesterol: 190",
      healthScore: "+50 points"
    }
  }];


  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories?.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [successStories?.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories?.length) % successStories?.length);
  };

  const currentData = successStories?.[currentStory];

  return (
    <section className="py-16 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20 mb-4">
            <Icon name="Star" size={16} />
            <span className="text-sm font-medium font-poppins">Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Real People,
            <span className="block text-primary">Real Transformations</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Discover how our community members achieved their health goals while celebrating their cultural food heritage.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="relative bg-card rounded-3xl heritage-shadow overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Story Content */}
            <div className="p-8 lg:p-12 space-y-6">
              {/* User Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={currentData?.image}
                    alt={currentData?.alt}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary" />

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-success-foreground" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-foreground">
                    {currentData?.name}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {currentData?.age} years old • {currentData?.location}
                  </p>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                <Icon name="Trophy" size={16} />
                <span className="text-sm font-medium font-poppins">{currentData?.achievement}</span>
              </div>

              {/* Story Text */}
              <blockquote className="text-foreground font-inter leading-relaxed text-lg italic">
                "{currentData?.story}"
              </blockquote>

              {/* Health Metrics */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-xl">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Before</div>
                  <div className="font-semibold text-foreground">{currentData?.beforeAfter?.before}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">After</div>
                  <div className="font-semibold text-success">{currentData?.beforeAfter?.after}</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Health Goal:</span>
                  <span className="font-medium text-foreground">{currentData?.healthGoal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Timeframe:</span>
                  <span className="font-medium text-foreground">{currentData?.timeframe}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Health Score:</span>
                  <span className="font-medium text-success">{currentData?.beforeAfter?.healthScore}</span>
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={48} className="text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold font-poppins text-foreground">
                    Favorite Feature
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    {currentData?.favoriteFeature}
                  </p>
                </div>

                <Link to="/community">
                  <Button variant="outline" iconName="Users" iconPosition="left">
                    Join Our Community
                  </Button>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-primary/30">
                <Icon name="Quote" size={32} />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex space-x-2">
              {successStories?.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full organic-transition ${
                index === currentStory ? 'bg-primary' : 'bg-muted-foreground/30'}`
                } />

              )}
            </div>

            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevStory}
                className="w-10 h-10 bg-card/80 backdrop-blur-sm">

                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextStory}
                className="w-10 h-10 bg-card/80 backdrop-blur-sm">

                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-inter mb-6">
            Ready to start your own transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/meal-planning">
              <Button variant="default" size="lg" iconName="Calendar" iconPosition="right">
                Create Your Meal Plan
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="outline" size="lg" iconName="MessageCircle" iconPosition="right">
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStoriesCarousel;