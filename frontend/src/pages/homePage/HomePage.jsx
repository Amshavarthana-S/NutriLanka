import HeroSection from "./components/HeroSection";
import InteractiveFoodMap from "./components/InteractiveFoodMap";
import PopularDishesSection from "./components/PopularDishesSection";
import SuccessStoriesCarousel from "./components/SuccessStoriesCarousel";
import CTASection from "./components/CTASection";
import Header from "./../../components/ui/Header";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-5">
          <HeroSection />
          <InteractiveFoodMap />
          <PopularDishesSection />
          <SuccessStoriesCarousel />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default Homepage;
