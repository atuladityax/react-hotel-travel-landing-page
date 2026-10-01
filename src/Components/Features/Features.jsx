import "./Features.css";

const Features = ({ icon: Icon, title, description, linkUrl = "#" }) => {
  return (
    <div className="feature-card">
      <span className="feature-icon">
        <Icon size={24} strokeWidth={2.2} />
      </span>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <a
        className="feature-link"
        href={linkUrl}
      >
        Learn More
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export default Features;
