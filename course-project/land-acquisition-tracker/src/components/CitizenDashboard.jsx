import CaseSearch from './CaseSearch';
import CaseDetails from './CaseDetails';
import PaymentTracker from './PaymentTracker';
import ObjectionForm from './ObjectionForm';
import NotificationHistory from './NotificationHistory';

export default function CitizenDashboard({
  cases,
  selectedCase,
  notifications,
  onSelectCase,
  onAddObjection,
  onBack,
}) {
  return (
    <section className="portal-section">
      <div className="dashboard-header">
        <div className="section-heading">
          <p className="section-label">Citizen Portal</p>
          <h1>Citizen Dashboard</h1>
        </div>
        <button type="button" className="hero-button secondary" onClick={onBack}>
          Logout
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <CaseSearch cases={cases} onSelectCase={onSelectCase} />
          <CaseDetails caseItem={selectedCase} />
        </div>

        <div className="dashboard-panel">
          <PaymentTracker status={selectedCase ? selectedCase.paymentStatus : ''} />
        </div>

        <div className="dashboard-panel">
          <ObjectionForm selectedCase={selectedCase} onAddObjection={onAddObjection} />
        </div>

        <div className="dashboard-panel">
          <NotificationHistory notifications={notifications} />
        </div>
      </div>
    </section>
  );
}
