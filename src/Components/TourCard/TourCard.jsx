import "./TourCard.css";

function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.category} />

      <div className="tour-info">
        <div className="tour-header">
          <span className="tour-category">{tour.category}</span>

          <span className="tour-price">
            ${tour.price} <small>per day</small>
          </span>
        </div>

        <h2>{tour.title}</h2>

        <div className="tour-details">
          <span>↗ TRENDING</span>
          <span>◷ {tour.duration}</span>
          <span>♧ {tour.location}</span>
        </div>

        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
}

export default TourCard;
