import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [foodsOpen, setFoodsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setFoodsOpen(false);
  }, [location]);

  const foodCategories = [
    { path: '/foods/main-dish', label: 'Main Dish' },
    { path: '/foods/dessert', label: 'Dessert' },
    { path: '/foods/street-food', label: 'Street Food' },
    { path: '/foods/beverage', label: 'Beverage' },
  ];

  const isFoodsActive = location.pathname.startsWith('/foods');

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-text">Gourmet</span>
          <span className="navbar__logo-accent">Discoveries</span>
        </NavLink>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <NavLink to="/" className="navbar__link" end>Home</NavLink>

          <div
            className={`navbar__dropdown ${isFoodsActive ? 'active' : ''}`}
            onMouseEnter={() => setFoodsOpen(true)}
            onMouseLeave={() => setFoodsOpen(false)}
          >
            <button
              className={`navbar__link navbar__link--dropdown ${isFoodsActive ? 'active' : ''}`}
              onClick={() => setFoodsOpen(!foodsOpen)}
            >
              Foods
              <svg className={`navbar__chevron ${foodsOpen ? 'navbar__chevron--open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`navbar__submenu ${foodsOpen ? 'navbar__submenu--open' : ''}`}>
              {foodCategories.map(cat => (
                <NavLink key={cat.path} to={cat.path} className="navbar__sublink">
                  {cat.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/about" className="navbar__link">About Us</NavLink>
        </div>
      </div>
      <div className="accent-stripe" />
    </nav>
  );
}
