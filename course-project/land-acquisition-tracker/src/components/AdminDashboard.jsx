import AdminPanel from './AdminPanel';

export default function AdminDashboard({
  cases,
  objections,
  onObjectionStatusChange,
  onPaymentStatusChange,
  onBack,
}) {
  return (
    <section className="portal-section">
      <div className="dashboard-header">
        <div className="section-heading">
          <p className="section-label">Department Portal</p>
          <h1>Admin Dashboard</h1>
        </div>
        <button type="button" className="hero-button secondary" onClick={onBack}>
          Logout
        </button>
      </div>

      <AdminPanel
        cases={cases}
        objections={objections}
        onObjectionStatusChange={onObjectionStatusChange}
        onPaymentStatusChange={onPaymentStatusChange}
      />
    </section>
  );
}
