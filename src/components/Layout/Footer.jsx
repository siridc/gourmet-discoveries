import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="accent-stripe" />
      <div className="footer__inner container">
        <p className="footer__brand">
          <span className="text-display">Gourmet</span> Discoveries
        </p>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Gourmet Discoveries. Celebrating Filipino Cuisine.
        </p>
      </div>
    </footer>
  );
}
