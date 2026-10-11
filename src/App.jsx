import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BurgerMenu from "./components/BurgerMenu.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  function addToCart(burger) {
    setCart((current) => {
      const existing = current.find((item) => item.id === burger.id);

      if (existing) {
        return current.map((item) =>
          item.id === burger.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...burger, quantity: 1 }];
    });
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function showFavorites() {
    setFavoritesOnly(true);
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        favoritesCount={favorites.length}
        onCartClick={() => setCartOpen(true)}
        onFavoritesClick={showFavorites}
      />

      <main>
        <Hero />

        <BurgerMenu
          favorites={favorites}
          onFavorite={toggleFavorite}
          onAddToCart={addToCart}
          favoritesOnly={favoritesOnly}
          setFavoritesOnly={setFavoritesOnly}
        />

        <section className="promo" id="about">
          <div>
            <span className="eyebrow">THE TASTY PROMISE</span>
            <h2>Made fresh. <span>Served happy.</span></h2>
            <p>Great ingredients, bold flavors, and burgers made with love.</p>
            <a href="#menu" className="primary-button">Explore our menu</a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700"
            alt="Crispy golden fries"
          />
        </section>
      </main>

      <Footer />

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onQuantityChange={changeQuantity}
        onRemove={removeFromCart}
      />
    </>
  );
}
