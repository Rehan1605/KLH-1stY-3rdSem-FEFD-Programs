export default function AdminPanel({
  cases,
  objections,
  onObjectionStatusChange,
  onPaymentStatusChange,
}) {
  return (
    <div className="admin-grid">
      <div className="dashboard-panel admin-panel-wide">
        <h2>View Objections</h2>
        {objections.length === 0 ? (
          <p className="empty-message">No objections submitted yet.</p>
        ) : (
          <div className="table-wrap">
            <table className="portal-table">
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Objection Type</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {objections.map((objection) => (
                  <tr key={objection.id}>
                    <td>{objection.caseId}</td>
                    <td>{objection.objectionType}</td>
                    <td>{objection.description}</td>
                    <td>{objection.status}</td>
                    <td>
                      <div className="table-actions">
                        <button
                          type="button"
                          onClick={() => onObjectionStatusChange(objection.id, 'Approved')}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => onObjectionStatusChange(objection.id, 'Rejected')}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="dashboard-panel">
        <h2>Payment Status Management</h2>
        <div className="case-admin-list">
          {cases.map((caseItem) => (
            <div key={caseItem.caseId} className="case-admin-row">
              <div>
                <strong>{caseItem.caseId}</strong>
                <p>{caseItem.owner} - {caseItem.district}</p>
              </div>
              <select
                value={caseItem.paymentStatus}
                onChange={(event) =>
                  onPaymentStatusChange(caseItem.caseId, event.target.value)
                }
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Completed</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
