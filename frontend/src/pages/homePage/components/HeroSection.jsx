import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Calendar,
  Database,
  TrendingUp,
  Heart,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="cultural-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-amber-600" />
            <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.5" className="text-amber-600" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cultural-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full border border-amber-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Nourishment Through Heritage</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Culture,
                <span className="block text-amber-600">Your Health,</span>
                <span className="block text-orange-600">Your Way</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl">
                Discover the perfect harmony between Sri Lankan culinary traditions and modern nutrition science. 
                Transform your health journey while celebrating the foods you love.
              </p>
            </div>

            {/* Key Messages */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
                <span className="font-medium">Nourish your heritage, fuel your future</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                <span className="font-medium">Traditional wisdom meets modern wellness</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/meal-planning" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                  Start Your Meal Journey
                  <Calendar className="w-5 h-5" />
                </button>
              </Link>

              <Link to="/food-database" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-6 py-3 rounded-xl transition-all">
                  Explore Food Database
                  <Database className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">2,500+</div>
                <div className="text-sm text-gray-600">Traditional Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">15,000+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1704728233642-7a03de4e1e19?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Sri Lankan curry dishes with rice, vegetables and spices arranged on banana leaf"
                className="w-full h-80 object-cover rounded-2xl"
              />

              {/* Floating Card 1 */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-xl shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <div>
                    <div className="font-bold text-sm">Health Score</div>
                    <div className="text-xs opacity-90">+25% This Month</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <div>
                    <div className="font-bold text-sm">Cultural Balance</div>
                    <div className="text-xs opacity-90">Perfect Harmony</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-yellow-200/30 to-amber-200/30 rounded-3xl transform -rotate-2 -z-20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Discover More</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;