import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const features = [
  {
    icon: 'Calendar',
    title: 'Personalized Meal Plans',
    description: 'Custom meal planning based on your health goals and cultural preferences'
  },
  {
    icon: 'Database',
    title: 'Complete Food Database',
    description: '2,500+ traditional recipes with detailed nutritional information'
  },
  {
    icon: 'Users',
    title: 'Supportive Community',
    description: 'Connect with 15,000+ members on similar health journeys'
  },
  {
    icon: 'UserCheck',
    title: 'Expert Guidance',
    description: 'Consultations with local nutritionists who understand your culture'
  }];


  const testimonialQuotes = [
  "Finally, a platform that understands my food culture!",
  "Lost weight without giving up rice and curry",
  "My diabetes is under control with traditional foods",
  "The community support is incredible"];


  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Main CTA Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                <Icon name="Sparkles" size={16} />
                <span className="text-sm font-medium font-poppins">Start Your Journey Today</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground leading-tight">
                Transform Your Health
                <span className="block text-primary">With Foods You Love</span>
              </h2>

              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Join thousands of Sri Lankans who've discovered the secret to sustainable health: 
                embracing your cultural food heritage while achieving your wellness goals.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features?.map((feature, index) =>
              <div key={index} className="flex items-start space-x-3 p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg flex-shrink-0">
                    <Icon name={feature?.icon} size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-poppins text-sm mb-1">
                      {feature?.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-inter leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5]?.map((i) =>
                  <div key={i} className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                      <Icon name="User" size={12} className="text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  <span className="font-semibold text-foreground">15,247+ members</span> already transforming their health
                </div>
              </div>

              {/* Floating Testimonials */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {testimonialQuotes?.map((quote, index) =>
                <div key={index} className="bg-success/10 text-success px-3 py-2 rounded-full border border-success/20">
                    "{quote}"
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="flex items-center space-x-2 text-success">
                  <Icon name="Shield" size={16} />
                  <span className="text-sm font-medium">Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Award" size={16} />
                  <span className="text-sm font-medium">Expert Approved</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground font-inter">
                Free to start • No credit card required
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 bg-card rounded-3xl p-8 heritage-shadow">
              <Image
                src="https://images.unsplash.com/photo-1710186012244-81bd98745f7d"
                alt="Happy Sri Lankan family enjoying traditional meal together at dining table with various curry dishes"
                className="w-full h-80 object-cover rounded-2xl" />

              
              {/* Floating Success Metrics */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-4 rounded-xl heritage-shadow animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-90">Success Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl heritage-shadow animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold">2.5K+</div>
                  <div className="text-xs opacity-90">Recipes</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-secondary text-secondary-foreground p-3 rounded-xl heritage-shadow animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} />
                  <div className="text-xs font-medium">Cultural<br />Balance</div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-3xl transform -rotate-2 -z-20"></div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-warning/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent/20 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 bg-card/80 backdrop-blur-sm rounded-2xl p-6 heritage-shadow border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary font-poppins">15K+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary font-poppins">2.5K+</div>
              <div className="text-sm text-muted-foreground">Traditional Recipes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success font-poppins">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent font-poppins">45K+</div>
              <div className="text-sm text-muted-foreground">Lives Improved</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;