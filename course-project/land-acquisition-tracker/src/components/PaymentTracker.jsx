export default function PaymentTracker({ status }) {
  const steps = [
    {
      label: 'Application Submitted',
      activeFor: ['Pending', 'Processing', 'Completed'],
    },
    {
      label: 'Compensation Approved',
      activeFor: ['Pending', 'Processing', 'Completed'],
    },
    {
      label: 'Payment Processing',
      activeFor: ['Processing', 'Completed'],
    },
    {
      label: 'Payment Completed',
      activeFor: ['Completed'],
    },
  ];

  return (
    <div>
      <h2>Payment Tracker</h2>
      <div className="tracker-list">
        {steps.map((step) => {
          const isActive = step.activeFor.includes(status);
          const isCurrent =
            (status === 'Pending' && step.label === 'Compensation Approved') ||
            (status === 'Processing' && step.label === 'Payment Processing') ||
            (status === 'Completed' && step.label === 'Payment Completed');

          return (
            <div
              key={step.label}
              className={`tracker-step ${isActive ? 'active' : ''} ${
                isCurrent ? 'current' : ''
              }`}
            >
              <span className="tracker-marker">{isActive ? 'Done' : 'Open'}</span>
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
