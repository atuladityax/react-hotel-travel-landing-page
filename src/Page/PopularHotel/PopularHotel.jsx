import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HotelCard from "../../Components/HotelCard/Hotelcard";

import hotel1 from "../../assets/hotel1.jpeg";
import hotel2 from "../../assets/hotel2.jpeg";
import hotel3 from "../../assets/hotel3.jpeg";
import "../../Page/PopularHotel/PopularHotel.css";

const hotels = [
  {
    image: hotel1,
    name: "Wyatt Residency",
    rating: "4.8",
    location: "Rome, Italy",
    price: "USD 39/Day",
    description:
      "Lorem ipsum dolor sit amet, consecteur dolor adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: hotel2,
    name: "Soho Paradise",
    rating: "4.9",
    location: "Ibiza, Spain",
    price: "USD 50/Day",
    description:
      "Lorem ipsum dolor sit amet, consecteur dolor adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: hotel3,
    name: "Hotel Baja",
    rating: "5.0",
    location: "Palo Alto, CA",
    price: "USD 19/Day",
    description:
      "Lorem ipsum dolor sit amet, consecteur dolor adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
  },
];

const PopularHotels = () => {
  const hotelsRef = useRef(null);

  const scrollHotels = (direction) => {
    const track = hotelsRef.current;
    const card = track?.firstElementChild;

    if (!track || !card) return;

    track.scrollBy({
      left: direction * (card.offsetWidth + 30),
      behavior: "smooth",
    });
  };

  return (
    <section className="popular-hotels">
      <div className="popular-hotels-header">
        <h2 className="popular-hotels-title">Popular Hotels</h2>

        <div className="hotel-navigation">
          <button
            type="button"
            className="hotel-nav-btn"
            aria-label="Scroll previous hotels"
            onClick={() => scrollHotels(-1)}
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>

          <button
            type="button"
            className="hotel-nav-btn"
            aria-label="Scroll next hotels"
            onClick={() => scrollHotels(1)}
          >
            <ChevronRight size={22} strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className="popular-hotels-container" ref={hotelsRef}>
        {hotels.map((hotel) => (
          <HotelCard
            key={`${hotel.name}-${hotel.location}`}
            image={hotel.image}
            name={hotel.name}
            rating={hotel.rating}
            location={hotel.location}
            price={hotel.price}
            description={hotel.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularHotels;
