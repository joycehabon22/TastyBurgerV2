import { useState } from "react";
import { Search } from "lucide-react";
import { burgers, categories } from "../data/burger.js";
import CategoryTabs from "./CategoryTabs.jsx";
import BurgerCard from "./BurgerCard.jsx";

export default function BurgerMenu({
  favorites,
  onFavorite,
  onAddToCart,
  favoritesOnly,
  setFavoritesOnly
}) {
  const [activeCategory, setActiveCategory] = useState("All Burgers");
  const [search, setSearch] = useState("");

  const category = favoritesOnly ? "Favorites" : activeCategory;

  function selectCategory(value) {
    setActiveCategory(value);
    setFavoritesOnly(value === "Favorites");
  }

  const filteredBurgers = burgers.filter((burger) => {
    const matchesCategory =
      category === "All Burgers" ||
      (category === "Favorites"
        ? favorites.includes(burger.id)
        : burger.category === category);

    const matchesSearch =
      `${burger.name} ${burger.description}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <span className="eyebrow">GOOD FOOD, GOOD MOOD</span>
        <h2>Find Your <span>Favorite</span></h2>
        <p>Freshly made and always worth the bite!</p>
      </div>

      <label className="search-box">
        <Search size={18} />

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search burgers..."
        />
      </label>

      <CategoryTabs
        categories={categories}
        activeCategory={category}
        onCategoryChange={selectCategory}
      />

      {filteredBurgers.length > 0 ? (
        <div className="burger-grid">
          {filteredBurgers.map((burger) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
              isFavorite={favorites.includes(burger.id)}
              onFavorite={onFavorite}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <p className="empty-message">
          No burgers found. Try another search or category.
        </p>
      )}
    </section>
  );
}
