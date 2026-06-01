import { useState } from 'react';

export default function CitizenLogin({ onLogin, onBack }) {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (aadhaarNumber.trim() === '') {
      setError('Aadhaar Number is required.');
      return;
    }

    if (!/^\d{12}$/.test(aadhaarNumber.trim())) {
      setError('Aadhaar Number must contain exactly 12 digits.');
      return;
    }

    if (password === '') {
      setError('Password is required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (aadhaarNumber.trim() !== '123456789012' || password !== 'citizen123') {
      setError('Invalid Aadhaar Number or Password');
      return;
    }

    setError('');
    onLogin();
  };

  return (
    <section className="portal-section narrow-section">
      <div className="section-heading">
        <p className="section-label">Citizen Access</p>
        <h1>Citizen Login</h1>
      </div>

      <form className="portal-form" onSubmit={handleSubmit}>
        <label>
          Aadhaar Number
          <input
            type="text"
            value={aadhaarNumber}
            onChange={(event) => setAadhaarNumber(event.target.value)}
            placeholder="12 digit number"
            maxLength="12"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Minimum 6 characters"
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
