import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFoodById, getCategoryById } from '../data/foods';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './FoodDetail.css';

export default function FoodDetail() {
  const { category, foodId } = useParams();
  const food = getFoodById(foodId);
  const cat = getCategoryById(category);

  if (!food) {
    return (
      <div className="not-found container section">
        <h1>Dish not found</h1>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="not-found__link">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="food-detail">
      {/* Hero */}
      <section className="food-detail__hero">
        <div className="food-detail__hero-bg">
          <img src={food.image} alt={food.name} loading="eager" />
          <div className="food-detail__hero-overlay" />
        </div>
        <motion.div
          className="food-detail__hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link to={`/foods/${category}`} className="food-detail__back">
            ← {cat?.name || 'Back'}
          </Link>
          <h1 className="food-detail__title">{food.name}</h1>
        </motion.div>
      </section>

      {/* History */}
      <section className="food-detail__section section">
        <div className="container">
          <motion.div
            className="food-detail__history"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="food-detail__history-image">
              <img src={food.image} alt={food.name} loading="lazy" />
            </div>
            <div className="food-detail__history-text">
              <h2 className="food-detail__section-title">
                <span className="text-display">History</span> of {food.name}
              </h2>
              {food.history.map((para, i) => (
                <p key={i} className="food-detail__paragraph">{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="food-detail__section food-detail__section--alt section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="food-detail__section-title text-center">
              <span className="text-display">Ingredients</span>
            </h2>
            <ul className="food-detail__ingredients">
              {food.ingredients.map((item, i) => (
                <li key={i} className="food-detail__ingredient">
                  <label className="food-detail__checkbox-label">
                    <input type="checkbox" className="food-detail__checkbox" />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      {food.youtubeId && (
        <section className="food-detail__section section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="food-detail__section-title text-center">
                <span className="text-display">Watch</span> the Procedure
              </h2>
              <div className="food-detail__video-wrapper">
                <YouTubeEmbed videoId={food.youtubeId} title={`How to cook ${food.name}`} />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Steps */}
      <section className="food-detail__section food-detail__section--alt section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="food-detail__section-title text-center">
              <span className="text-display">Steps</span>
            </h2>
            <div className="food-detail__steps">
              {food.steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="food-detail__step"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="food-detail__step-number">{i + 1}</div>
                  <div className="food-detail__step-body">
                    <h3 className="food-detail__step-title">{step.title}</h3>
                    <p className="food-detail__step-desc">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="food-detail__back-section section">
        <div className="container text-center">
          <Link to={`/foods/${category}`} className="food-detail__back-btn">
            ← Back to {cat?.name || 'Category'}
          </Link>
        </div>
      </section>
    </div>
  );
}
