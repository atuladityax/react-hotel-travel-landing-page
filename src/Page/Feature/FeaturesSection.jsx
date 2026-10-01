import Features from "../../Components/Features/Features";
import {
  Headset,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import "../../Page/Feature/FeaturesSection.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure",
    description:
      "We work with trusted vendors who meet our security standards.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Get help whenever you need it from our dedicated support team.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customizable",
    description: "Tailor the experience to fit the way you and your team work.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section" aria-label="Product features">
      <div className="features-inner">
        <div className="features-grid">
          {features.map((feature) => (
            <Features key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
