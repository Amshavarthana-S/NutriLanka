import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WeeklyReportCard = ({ report, onViewFullReport }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-success/10 border-success/20';
    if (score >= 60) return 'bg-warning/10 border-warning/20';
    return 'bg-destructive/10 border-destructive/20';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 heritage-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground font-poppins">
            Weekly Report
          </h3>
          <p className="text-sm text-muted-foreground">
            {report?.weekRange}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="FileText"
          iconPosition="left"
          onClick={onViewFullReport}
        >
          Full Report
        </Button>
      </div>
      <div className={`p-4 rounded-lg border mb-6 ${getScoreBg(report?.overallScore)}`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-foreground font-poppins">
              Overall Health Score
            </h4>
            <p className="text-sm text-muted-foreground">
              Based on your cultural wellness goals
            </p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold font-poppins ${getScoreColor(report?.overallScore)}`}>
              {report?.overallScore}
            </div>
            <div className="text-sm text-muted-foreground">
              out of 100
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-medium text-foreground font-poppins">
          Key Highlights
        </h4>
        
        {report?.highlights?.map((highlight, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              highlight?.type === 'achievement' ? 'bg-success/20' :
              highlight?.type === 'improvement'? 'bg-primary/20' : 'bg-warning/20'
            }`}>
              <Icon 
                name={
                  highlight?.type === 'achievement' ? 'Trophy' :
                  highlight?.type === 'improvement'? 'TrendingUp' : 'AlertTriangle'
                } 
                size={16} 
                className={
                  highlight?.type === 'achievement' ? 'text-success' :
                  highlight?.type === 'improvement'? 'text-primary' : 'text-warning'
                }
              />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-foreground text-sm">
                {highlight?.title}
              </h5>
              <p className="text-sm text-muted-foreground">
                {highlight?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground font-poppins">
              {report?.stats?.mealsLogged}
            </div>
            <div className="text-xs text-muted-foreground">
              Meals Logged
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground font-poppins">
              {report?.stats?.exerciseDays}
            </div>
            <div className="text-xs text-muted-foreground">
              Active Days
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground font-poppins">
              {report?.stats?.culturalMeals}
            </div>
            <div className="text-xs text-muted-foreground">
              Cultural Meals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReportCard;