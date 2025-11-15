import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GoalCard = ({ goal, onUpdateGoal, onCompleteGoal }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 60) return 'bg-warning';
    return 'bg-primary';
  };

  const getDaysRemaining = (targetDate) => {
    const today = new Date();
    const target = new Date(targetDate);
    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining(goal?.targetDate);

  return (
    <div className="bg-card border border-border rounded-lg p-6 heritage-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className={`w-12 h-12 rounded-lg ${goal?.color} flex items-center justify-center`}>
            <Icon name={goal?.icon} size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground font-poppins">
              {goal?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {goal?.description}
            </p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => onUpdateGoal(goal?.id)}>
            <Icon name="Edit" size={16} />
          </Button>
          {goal?.progress >= 100 && (
            <Button variant="ghost" size="icon" onClick={() => onCompleteGoal(goal?.id)}>
              <Icon name="Check" size={16} />
            </Button>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Progress
            </span>
            <span className="text-sm text-muted-foreground">
              {goal?.progress}%
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className={`h-2 rounded-full organic-transition ${getProgressColor(goal?.progress)}`}
              style={{ width: `${Math.min(goal?.progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Current</div>
            <div className="font-medium text-foreground">
              {goal?.current} {goal?.unit}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Target</div>
            <div className="font-medium text-foreground">
              {goal?.target} {goal?.unit}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {daysRemaining > 0 ? `${daysRemaining} days left` : 'Overdue'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {goal?.streak} day streak
            </span>
          </div>
        </div>

        {goal?.milestones && goal?.milestones?.length > 0 && (
          <div className="pt-2 border-t border-border">
            <div className="text-xs text-muted-foreground mb-2">Recent Milestones</div>
            <div className="space-y-1">
              {goal?.milestones?.slice(0, 2)?.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={12} className="text-success" />
                  <span className="text-xs text-foreground">{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalCard;