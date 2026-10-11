export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange
}) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category ? "category active" : "category"
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
