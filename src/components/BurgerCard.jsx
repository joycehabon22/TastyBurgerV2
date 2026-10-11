import { Heart, ShoppingCart, Star } from "lucide-react";

export default function BurgerCard({
  burger,
  isFavorite,
  onFavorite,
  onAddToCart
}) {
  return (
    <article className="burger-card">
      <div className="burger-image-wrap">
        <img src={burger.image} alt={burger.name} />

        <button
          className="favorite-button"
          onClick={() => onFavorite(burger.id)}
          aria-label="Toggle favorite"
        >
          <Heart
            size={19}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="burger-info">
        <div className="stars">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < burger.rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        <h3>{burger.name}</h3>
        <p>{burger.description}</p>

        <div className="card-bottom">
          <strong>₱{burger.price.toFixed(2)}</strong>

          <button
            className="add-button"
            onClick={() => onAddToCart(burger)}
          >
            <ShoppingCart size={15} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
