import "./Testimonials.css";
import Ellipse4 from "../image/Ellipse 4.png"; // Path to first image
import Ellipse from "../image/Ellipse .png";  // Path to second image



const testimonials = [
  {
    id: 2,
    
    text1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed..",
  },
  {
    id: 1,
    name: "Samuel Karl",
    role: "CEO",
    image: Ellipse4,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed..",
  },
  
  {
    id: 3,
    name: "Daria Linney",
    role: "CIO",
    image: Ellipse,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed..",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-header">From our Customers</h2>
      <h3 className="testimonials-subheader">Testimonials</h3>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === 1 ? "center-card" : "side-card"
            }`}
          >
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            )}
            <p className="testimonial-text">{testimonial.text}</p>
            {testimonial.name && <h4 className="testimonial-name">{testimonial.name}</h4>}
            {testimonial.role && <p className="testimonial-role">{testimonial.role}</p>}
            <p className="testimonial-text1">{testimonial.text1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
