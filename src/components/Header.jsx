import { Heart, ShoppingCart } from "lucide-react";

export default function Header({
  cartCount,
  favoritesCount,
  onCartClick,
  onFavoritesClick
}) {
  return (
    <header className="header">
      <a href="#home" className="logo">
        🍔 TASTY <span>BURGER</span>
      </a>

      <nav>
        <a href="#home">HOME</a>
        <a href="#menu">OUR MENU</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div className="header-actions">
        <button onClick={onFavoritesClick} className="header-button">
          <Heart size={18} />
          {favoritesCount}
        </button>

        <button onClick={onCartClick} className="header-button">
          <ShoppingCart size={18} />
          Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}
