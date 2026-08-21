import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFoodsByCategory, getCategoryById } from '../data/foods';
import FoodCard from '../components/FoodCard';
import './FoodCategory.css';

const spotlightColors = {
  'main-dish': 'rgba(0, 56, 168, 0.25)',
  'dessert': 'rgba(206, 17, 38, 0.25)',
  'street-food': 'rgba(252, 209, 22, 0.30)',
  'beverage': 'rgba(0, 40, 120, 0.25)',
};

export default function FoodCategory() {
  const { category } = useParams();
  const cat = getCategoryById(category);
  const categoryFoods = getFoodsByCategory(category);

  if (!cat) {
    return (
      <div className="not-found container section">
        <h1>Category not found</h1>
        <p>The category you're looking for doesn't exist.</p>
        <Link to="/" className="not-found__link">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="food-category">
      {/* Hero Banner */}
      <section className="food-category__hero">
        <div className="food-category__hero-bg">
          <img src={cat.image} alt={cat.name} loading="eager" />
          <div className="food-category__hero-overlay" />
        </div>
        <motion.div
          className="food-category__hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="food-category__title">{cat.name}</h1>
          <p className="food-category__subtitle">
            With Authentic Filipino Recipes Along With Their History
          </p>
        </motion.div>
      </section>

      {/* Food Grid */}
      <section className="food-category__grid-section section">
        <div className="container">
          <motion.p
            className="food-category__count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categoryFoods.length} {categoryFoods.length === 1 ? 'recipe' : 'recipes'}
          </motion.p>
          <div className="food-category__grid">
            {categoryFoods.map((food, idx) => (
              <FoodCard
                key={food.id}
                name={food.name}
                image={food.image}
                to={`/foods/${category}/${food.id}`}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
