import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <span className="eyebrow">FRESH OFF THE GRILL</span>

        <h1>
          OUR CRAZY
          <span>BURGERS</span>
        </h1>

        <p>
          Get ready for a wild ride of flavor! Enjoy juicy patties,
          bold toppings and irresistible sauces stacked on toasted buns.
        </p>

        <div className="perks">
          <span>✓ Fresh ingredients</span>
          <span>✓ Made to order</span>
          <span>✓ Big flavor</span>
        </div>

        <a href="#menu" className="primary-button">
          Explore our menu <ArrowRight size={17} />
        </a>
      </div>

      <div className="hero-image">
        <div className="hero-circle"></div>

        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000"
          alt="Juicy cheeseburger"
        />

        <span className="hero-sticker">100% YUMMY</span>
      </div>
    </section>
  );
}
