import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, foods } from '../data/foods';
import FoodCard from '../components/FoodCard';
import './Home.css';

const allImages = foods.map(f => f.image);

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section with static image grid */}
      <section className="hero">
        <div className="hero__grid">
          {allImages.map((src, i) => (
            <div key={i} className="hero__grid-item">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="hero__overlay" />

        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero__title">
            <span className="text-display">Gourmet</span>
            <br />
            Discoveries
          </h1>
          <p className="hero__subtitle">
            A culinary journey through the heart of Filipino cuisine
          </p>
          <Link to="/foods/main-dish" className="hero__cta">
            Explore Dishes
          </Link>
        </motion.div>
      </section>

      {/* Category Preview */}
      <section className="home-categories section">
        <div className="container">
          <motion.div
            className="home-categories__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="home-categories__title">
              <span className="text-display">Discover</span> Filipino Flavors
            </h2>
            <p className="home-categories__desc">
              From hearty main dishes to refreshing beverages, explore the rich and diverse world of Filipino cuisine.
            </p>
          </motion.div>

          <div className="home-categories__grid">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={`/foods/${cat.id}`} className="category-card">
                  <div className="category-card__image-wrapper">
                    <img src={cat.image} alt={cat.name} className="category-card__image" loading="lazy" />
                  </div>
                  <div className="category-card__overlay">
                    <h3 className="category-card__name">{cat.name}</h3>
                    <p className="category-card__subtitle">{cat.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Preview */}
      <section className="featured section">
        <div className="container">
          <motion.div
            className="featured__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="featured__title">
              <span className="text-display">Must-Try</span> Classics
            </h2>
            <p className="featured__desc">
              Begin with these iconic dishes that define Filipino culinary heritage.
            </p>
          </motion.div>

          <div className="featured__grid">
            {foods.slice(0, 4).map((food, idx) => (
              <FoodCard
                key={food.id}
                name={food.name}
                image={food.image}
                to={`/foods/${food.category}/${food.id}`}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
