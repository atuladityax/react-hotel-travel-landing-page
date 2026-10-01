import{ useState} from "react";
import "../Questions/Questions.css";
import luxbeach from "../../assets/luxarybeach.jpeg"

function Questions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    {
      question: "Is lunch provided free of cost?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abuse of the system.",
    },
    {
      question: "Do you have 2 Bedroom suites?",
      answer:
        "Yes, we offer comfortable two-bedroom suites with spacious living areas and modern amenities for families and groups.",
    },
    {
      question: "Are Wi-Fi costs included in the price?",
      answer:
        "Yes, Wi-Fi is included in selected packages. Please check your booking details for the amenities included in your stay.",
    },
    {
      question: "Where can we reach you for support?",
      answer:
        "You can reach our support team through the contact form below or by contacting our customer service team.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section">

      <div className="questions-image">
        <img
          src={luxbeach}
          alt="Luxury hotel beside the beach"
        />
      </div>

      <div className="questions-content">

        <h1>Questions</h1>

        <p className="questions-description">
          Here are some frequently asked questions about our
          hotels from our loving customers. Should you have
          any other questions, feel free to reach out via
          the contact form below.
        </p>

        <div className="questions-list">

          {questions.map((item, index) => (
            <div className="question-item" key={index}>

              <div className="question-header">
                <h2>{item.question}</h2>

                <button
                  type="button"
                  className="question-toggle"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={activeIndex === index}
                  aria-label={
                    activeIndex === index
                      ? "Close answer"
                      : "Open answer"
                  }
                >
                  {activeIndex === index ? "−" : "+"}
                </button>
              </div>

              {activeIndex === index && (
                <p className="question-answer">
                  {item.answer}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Questions;