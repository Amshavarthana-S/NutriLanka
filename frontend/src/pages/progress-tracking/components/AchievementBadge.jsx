import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ achievement, isUnlocked = false, onClick }) => {
  return (
    <div 
      className={`relative p-4 rounded-lg border organic-transition cursor-pointer ${
        isUnlocked 
          ? 'bg-primary/10 border-primary heritage-shadow hover:shadow-lg' 
          : 'bg-muted border-border hover:bg-muted/80'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          isUnlocked ? 'bg-primary' : 'bg-muted-foreground/20'
        }`}>
          <Icon 
            name={achievement?.icon} 
            size={28} 
            className={isUnlocked ? 'text-primary-foreground' : 'text-muted-foreground'} 
          />
        </div>
        
        <div className="text-center space-y-1">
          <h4 className={`font-medium text-sm font-poppins ${
            isUnlocked ? 'text-foreground' : 'text-muted-foreground'
          }`}>
            {achievement?.title}
          </h4>
          <p className={`text-xs ${
            isUnlocked ? 'text-muted-foreground' : 'text-muted-foreground/60'
          }`}>
            {achievement?.description}
          </p>
        </div>
        
        {isUnlocked && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
            <Icon name="Check" size={14} className="text-success-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;