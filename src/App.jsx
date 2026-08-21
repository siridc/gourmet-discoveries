import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import FoodCategory from './pages/FoodCategory';
import FoodDetail from './pages/FoodDetail';
import About from './pages/About';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods/:category" element={<FoodCategory />} />
          <Route path="/foods/:category/:foodId" element={<FoodDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
