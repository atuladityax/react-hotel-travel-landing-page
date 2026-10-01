import "./Hotelcard.css";
import { DollarSign, MapPin } from "lucide-react";

const HotelCard = ({ image, name, rating, location, price, description }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image-container">
        <img className="hotel-image" src={image} alt={name} />
      </div>

      <div className="hotel-content">
        <div className="hotel-title-row">
          <h3 className="hotel-name">{name}</h3>

          <div className="hotel-rating">
            <span className="rating-star">★</span>
            <span className="rating-value">{rating}</span>
          </div>
        </div>

        <div className="hotel-info">
          <div className="hotel-location">
            <MapPin className="location-icon" size={16} />
            <span className="location-text">{location}</span>
          </div>

          <div className="hotel-price">
            <DollarSign className="price-icon" size={16} />
            <span className="price-text">{price}</span>
          </div>
        </div>

        <p className="hotel-description">{description}</p>
      </div>

      <button className="button">Book Now</button>
    </div>
  );
};

export default HotelCard;
