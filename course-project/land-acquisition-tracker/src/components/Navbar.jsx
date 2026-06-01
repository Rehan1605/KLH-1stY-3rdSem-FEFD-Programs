// Navbar component displays the portal logo and main navigation
export default function Navbar({ onHomeClick }) {
  const navLinks = ['Home', 'Services', 'Contact'];

  return (
    <header className="navbar">
      <button type="button" className="logo logo-button" onClick={onHomeClick}>
        Land Acquisition Tracker
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link} href="#" onClick={link === 'Home' ? onHomeClick : undefined}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
