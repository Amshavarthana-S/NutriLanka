// AppRoutes.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup"; 

import Homepage from "./pages/homePage/HomePage";
import ProgressTracking from "./pages/progress-tracking/ProgressTracking";
import FoodDatabase from "./pages/food-database/FoodDatabase";
import MealPlaning from "./pages/mealPlaning/MealPlaning";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />

        <Routes>
          {/* Register */}
          <Route path="/pages" element={<Signup />} />

          {/* Home */}
          <Route path="/" element={<Homepage />} />

          {/* Other pages - PUBLIC */}
          <Route path="/progress-tracking" element={<ProgressTracking />} />
          <Route path="/mealPlaning" element={<MealPlaning />} />
          <Route path="/food-database" element={<FoodDatabase />} />

          {/* fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
