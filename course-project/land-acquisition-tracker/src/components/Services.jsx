// Services component renders service cards using props and composition
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: '🔎',
      title: 'Search Case',
      description: 'Find land acquisition cases by application number or property details.',
    },
    {
      icon: '📄',
      title: 'View Compensation',
      description: 'Review compensation amounts and related information for cases.',
    },
    {
      icon: '💰',
      title: 'Payment Status',
      description: 'Check whether compensation payments have been processed or released.',
    },
    {
      icon: '✍️',
      title: 'File Objection',
      description: 'Submit objections and track their review status in the portal.',
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
