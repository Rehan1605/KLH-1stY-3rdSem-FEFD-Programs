import { useEffect, useState } from 'react';

export default function ObjectionForm({ selectedCase, onAddObjection }) {
  const [objectionType, setObjectionType] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) {
      return undefined;
    }

    const timerId = setTimeout(() => {
      setMessage('');
      setIsSuccess(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [isSuccess]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCase) {
      setMessage('Select a case before submitting an objection.');
      setIsSuccess(false);
      return;
    }

    if (objectionType === '') {
      setMessage('Select an objection type.');
      setIsSuccess(false);
      return;
    }

    if (description.trim() === '') {
      setMessage('Description cannot be empty.');
      setIsSuccess(false);
      return;
    }

    onAddObjection({
      caseId: selectedCase.caseId,
      objectionType,
      description: description.trim(),
    });

    setDescription('');
    setObjectionType('');
    setMessage('Objection submitted successfully.');
    setIsSuccess(true);
  };

  return (
    <div>
      <h2>Objection Form</h2>
      <form className="portal-form compact-form" onSubmit={handleSubmit}>
        <label>
          Objection Type
          <select
            value={objectionType}
            onChange={(event) => setObjectionType(event.target.value)}
          >
            <option value="">Select objection type</option>
            <option value="Wrong Compensation">Wrong Compensation</option>
            <option value="Incorrect Land Details">Incorrect Land Details</option>
            <option value="Payment Delay">Payment Delay</option>
          </select>
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows="4"
            placeholder="Write objection details"
          />
        </label>

        {message && (
          <p className={isSuccess ? 'form-success' : 'form-note'}>{message}</p>
        )}

        <button type="submit" className="hero-button primary">
          Submit
        </button>
      </form>
    </div>
  );
}
