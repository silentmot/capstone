import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Dining at Little Lemon was a delightful experience! The ambiance was cozy and inviting, and the dishes were a burst of flavor. Each plate was a culinary masterpiece, leaving me eagerly anticipating my next visit. Little Lemon truly stands out as a gem in the city's dining scene.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Little Lemon has become my go-to restaurant for every special occasion. Their attention to detail, from the decor to the exceptional service, makes every meal memorable. The menu's variety caters to all tastes, and the quality of the food is consistently outstanding. A must-visit for anyone who loves great food`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The fusion cuisine at Little Lemon is simply extraordinary. Each dish is a unique blend of flavors that surprises and delights. It's rare to find a restaurant that balances innovation with classic cooking so well. The staff's warm hospitality adds to the overall exceptional dining experience. Highly recommended!`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: ` was thoroughly impressed with my experience at Little Lemon. The menu offers a perfect mix of traditional and contemporary dishes, all prepared to perfection. The ambiance is both elegant and relaxing, making it ideal for both business lunches and family dinners. Little Lemon has set a new standard for fine dining in the city.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
