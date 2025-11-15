import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: 'Home' },
    { path: '/food-database', label: 'Food Database', icon: 'Database' },
    { path: '/mealPlaning', label: 'Meal Planning', icon: 'Calendar' },
    { path: '/progress-tracking', label: 'Progress Tracking', icon: 'TrendingUp' }
  ];

  const secondaryItems = [
    
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border heritage-shadow">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/homepage" className="flex items-center space-x-3 organic-transition hover:opacity-80">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="animate-spice-rotate">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
                  <path 
                    d="M12 16c0-2 2-4 4-4s4 2 4 4v8c0 2-2 4-4 4s-4-2-4-4v-8z M20 12c2 0 4 2 4 4v8c0 2-2 4-4 4" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <circle cx="16" cy="20" r="2" fill="white" />
                  <circle cx="24" cy="20" r="2" fill="white" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-poppins font-bold text-foreground">
                  NutriLanka
                </h1>
                <p className="text-xs text-muted-foreground font-inter">Heritage Wellness</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg organic-transition font-inter font-medium ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground heritage-shadow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="text-sm">{item?.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-poppins">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="font-poppins animate-heritage-glow">
              Start Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg organic-transition text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg organic-transition font-inter ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground heritage-shadow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <Button variant="outline" fullWidth className="font-poppins">
                  Sign In
                </Button>
                <Button variant="default" fullWidth className="font-poppins">
                  Start Journey
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;