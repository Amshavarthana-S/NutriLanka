import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      path: '/homepage', 
      label: 'Home', 
      icon: 'Home',
      description: 'Dashboard overview'
    },
    { 
      path: '/food-database', 
      label: 'Food Database', 
      icon: 'Database',
      description: 'Sri Lankan nutrition guide'
    },
    { 
      path: '/meal-planning', 
      label: 'Meal Planning', 
      icon: 'Calendar',
      description: 'Cultural meal plans'
    },
    { 
      path: '/community', 
      label: 'Community', 
      icon: 'Users',
      description: 'Connect with others'
    },
    { 
      path: '/expert-consultation', 
      label: 'Expert Consultation', 
      icon: 'UserCheck',
      description: 'Professional guidance'
    },
    { 
      path: '/progress-tracking', 
      label: 'Progress Tracking', 
      icon: 'TrendingUp',
      description: 'Health journey metrics'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;
  const shouldShowExpanded = !isCollapsed || isHovered;

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 z-40 bg-card border-r border-border heritage-shadow organic-transition ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {shouldShowExpanded && (
              <div className="animate-coconut-reveal">
                <h2 className="font-poppins font-semibold text-foreground">Navigation</h2>
                <p className="text-xs text-muted-foreground font-inter">Cultural wellness journey</p>
              </div>
            )}
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="ml-auto"
              >
                <Icon 
                  name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
                  size={16} 
                />
              </Button>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`group flex items-center space-x-3 p-3 rounded-lg organic-transition font-inter relative ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground heritage-shadow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              title={isCollapsed ? item?.label : ''}
            >
              <div className="flex-shrink-0">
                <Icon 
                  name={item?.icon} 
                  size={20}
                  className={isActivePath(item?.path) ? 'animate-spice-rotate' : ''}
                />
              </div>
              
              {shouldShowExpanded && (
                <div className="flex-1 min-w-0 animate-coconut-reveal">
                  <div className="font-medium text-sm truncate">
                    {item?.label}
                  </div>
                  <div className="text-xs opacity-75 truncate">
                    {item?.description}
                  </div>
                </div>
              )}

              {/* Active Indicator */}
              {isActivePath(item?.path) && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full" />
              )}

              {/* Tooltip for collapsed state */}
              {isCollapsed && !isHovered && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-popover border border-border rounded-lg heritage-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible organic-transition whitespace-nowrap z-50">
                  <div className="font-medium text-sm text-popover-foreground">
                    {item?.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item?.description}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-border">
          {shouldShowExpanded ? (
            <div className="space-y-3 animate-coconut-reveal">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Leaf" size={16} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground font-poppins">
                      Cultural Wellness
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Heritage meets health
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                fullWidth 
                className="font-poppins"
              >
                <Icon name="Settings" size={16} className="mr-2" />
                Settings
              </Button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-full"
                title="Cultural Wellness"
              >
                <Icon name="Leaf" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-full"
                title="Settings"
              >
                <Icon name="Settings" size={20} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;