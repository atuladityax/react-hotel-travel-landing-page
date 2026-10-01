import "../TrendingTours/TrendingTours.css";
import TourCard from "../../Components/TourCard/TourCard";
import beachImage from "../../assets/beach1.jpeg";
import beachImag from "../../assets/beach2.jpeg";

const tours = [
  {
    category: "Beachfront",
    price: 99,
    title: "A Trip to the Bahamas and the Caribbean Ocean",
    duration: "7 DAYS TOUR",
    location: "AFRICA",
    image: beachImage,
  },
  {
    category: "Cruise",
    price: 169,
    title: "Cruise to the Mariana Trench and the Philippines",
    duration: "15 DAYS TOUR",
    location: "AUSTRALIA",
    image: beachImag,
  },
];

function TrendingTours() {
  return (
    <section className="trending-tours">
      <div className="tours-intro">
        <h1>Trending Tours</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam.
        </p>

        <a href="#">
          View All Tours <span>→</span>
        </a>
      </div>

      <div className="tours-list">
        {tours.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default TrendingTours;
