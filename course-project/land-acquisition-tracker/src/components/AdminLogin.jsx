import { useState } from 'react';

export default function AdminLogin({ onLogin, onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required.');
      return;
    }

    if (username !== 'admin' || password !== 'admin123') {
      setError('Invalid admin credentials.');
      return;
    }

    setError('');
    onLogin();
  };

  return (
    <section className="portal-section narrow-section">
      <div className="section-heading">
        <p className="section-label">Department Access</p>
        <h1>Admin Login</h1>
      </div>

      <form className="portal-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="admin"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="admin123"
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="hero-button primary">
            Login
          </button>
          <button type="button" className="hero-button secondary" onClick={onBack}>
            Back
          </button>
        </div>
      </form>
    </section>
  );
}
