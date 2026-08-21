import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './FoodCard.css';

export default function FoodCard({ name, image, to, index = 0 }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 });
  const spotlightX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={to} className="food-card__link">
        <motion.div
          ref={ref}
          className="food-card"
          onMouseMove={handleMouse}
          onMouseLeave={handleLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <motion.div
            className="food-card__spotlight"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([sx, sy]) =>
                  `radial-gradient(circle at ${sx}% ${sy}%, rgba(252, 209, 22, 0.25) 0%, transparent 60%)`
              ),
            }}
          />
          <div className="food-card__image-wrapper">
            <img src={image} alt={name} className="food-card__image" loading="lazy" />
          </div>
          <div className="food-card__content">
            <h3 className="food-card__name">{name}</h3>
            <span className="food-card__cta">View Recipe →</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
