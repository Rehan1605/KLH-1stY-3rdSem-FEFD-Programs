export default function CaseDetails({ caseItem }) {
  if (!caseItem) {
    return <p className="empty-message">Search for a valid case to view details.</p>;
  }

  const details = [
    ['Case ID', caseItem.caseId],
    ['Owner Name', caseItem.owner],
    ['Survey Number', caseItem.surveyNumber],
    ['District', caseItem.district],
    ['Compensation', caseItem.compensation],
    ['Payment Status', caseItem.paymentStatus],
  ];

  return (
    <div className="details-block">
      <h2>Case Details</h2>
      <dl className="details-list">
        {details.map(([label, value]) => (
          <div key={label} className="details-row">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
