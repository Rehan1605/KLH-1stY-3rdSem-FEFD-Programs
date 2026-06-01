import { useState } from 'react';

export default function CaseSearch({ cases, onSelectCase }) {
  const [caseId, setCaseId] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    const matchedCase = cases.find(
      (caseItem) => caseItem.caseId === caseId.trim().toUpperCase()
    );

    if (matchedCase) {
      onSelectCase(matchedCase);
      setMessage('');
      return;
    }

    onSelectCase(null);
    setMessage('Case Not Found');
  };

  return (
    <div>
      <h2>Case Search</h2>
      <form className="inline-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={caseId}
          onChange={(event) => setCaseId(event.target.value)}
          placeholder="Enter Case ID"
        />
        <button type="submit" className="hero-button primary">
          Search
        </button>
      </form>
      {message && <p className="form-error">{message}</p>}
    </div>
  );
}
