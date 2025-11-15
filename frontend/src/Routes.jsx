import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import Homepage from './pages/homePage/HomePage';
import ProgressTracking from './pages/progress-tracking/ProgressTracking';
import FoodDatabase from './pages/food-database/FoodDatabase';
import MealPlaning from "./pages/mealPlaning/MealPlaning";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        <Route path="/progress-tracking" element={<ProgressTracking />} />
        <Route path="/MealPlaning" element={<MealPlaning />} />
        <Route path="/food-database" element={<FoodDatabase />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary> 
    </BrowserRouter>
  );
};

export default Routes;
