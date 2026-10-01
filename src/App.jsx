import "./App.css";
import TravelBlog from "./Components/TravelBlog/TravelBlog";
import AboutSection from "./Page/AboutSection/AboutSection";
import FeaturesSection from "./Page/Feature/FeaturesSection";
import Footer from "./Page/Footer/Footer";
import Hero from "./Page/Hero/hero";
import PopularHotels from "./Page/PopularHotel/PopularHotel";
import Questions from "./Page/Questions/Questions";
import Testimonials from "./Page/Testimonials/Testimonials";
import TrendingTours from "./Page/TrendingTours/TrendingTours";

function App() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PopularHotels/>
      <TrendingTours/>
      <AboutSection/>
      <TravelBlog/>
      <Testimonials/>
      <Questions/>
      <Footer/>
    </>
  );
}

export default App;
