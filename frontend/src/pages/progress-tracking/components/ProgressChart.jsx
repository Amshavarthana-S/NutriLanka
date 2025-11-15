import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressChart = ({ data, title, color = "#D4A574", unit = "" }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 heritage-shadow">
          <p className="text-sm font-medium text-popover-foreground">
            {label}
          </p>
          <p className="text-sm text-primary">
            {`${payload?.[0]?.value}${unit}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 heritage-shadow">
      <h3 className="text-lg font-semibold text-foreground font-poppins mb-4">
        {title}
      </h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;