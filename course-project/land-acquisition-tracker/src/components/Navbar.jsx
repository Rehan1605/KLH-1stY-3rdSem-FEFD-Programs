// Navbar component displays the portal logo and main navigation
export default function Navbar() {
  const navLinks = ['Home', 'Services', 'Contact'];

  return (
    <header className="navbar">
      <div className="logo">Land Acquisition Tracker</div>
      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
