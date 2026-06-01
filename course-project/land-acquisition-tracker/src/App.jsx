import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import CitizenLogin from './components/CitizenLogin';
import AdminLogin from './components/AdminLogin';
import CitizenDashboard from './components/CitizenDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [objections, setObjections] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [cases, setCases] = useState([
    {
      caseId: 'LA1023',
      owner: 'Ramesh',
      surveyNumber: '145A',
      district: 'Hyderabad',
      compensation: 'Rs. 8,50,000',
      paymentStatus: 'Processing',
    },
    {
      caseId: 'LA1024',
      owner: 'Suresh',
      surveyNumber: '220B',
      district: 'Warangal',
      compensation: 'Rs. 9,20,000',
      paymentStatus: 'Pending',
    },
    {
      caseId: 'LA1025',
      owner: 'Lakshmi',
      surveyNumber: '310C',
      district: 'Karimnagar',
      compensation: 'Rs. 7,75,000',
      paymentStatus: 'Completed',
    },
    {
      caseId: 'LA1026',
      owner: 'Ravi',
      surveyNumber: '88D',
      district: 'Nizamabad',
      compensation: 'Rs. 10,10,000',
      paymentStatus: 'Processing',
    },
  ]);

  useEffect(() => {
    const titles = {
      home: 'Home',
      citizenLogin: 'Citizen Login',
      adminLogin: 'Admin Login',
      citizenDashboard: 'Citizen Dashboard',
      adminDashboard: 'Admin Dashboard',
    };

    document.title = `${titles[screen]} | Land Acquisition Tracking System`;
  }, [screen]);

  const showHome = () => {
    setScreen('home');
  };

  const handleLogout = () => {
    setSelectedCase(null);
    setScreen('home');
  };

  const openCitizenLogin = () => {
    setScreen('citizenLogin');
  };

  const openAdminLogin = () => {
    setScreen('adminLogin');
  };

  const handleCitizenLogin = () => {
    setSelectedCase(null);
    setScreen('citizenDashboard');
  };

  const addNotification = (message) => {
    setNotifications((currentNotifications) => [message, ...currentNotifications]);
  };

  const handleSelectCase = (caseItem) => {
    setSelectedCase(caseItem);
  };

  const handleAddObjection = (objection) => {
    const newObjection = {
      id: Date.now(),
      status: 'Pending',
      ...objection,
    };

    setObjections((currentObjections) => [newObjection, ...currentObjections]);
    addNotification('Objection Submitted');
  };

  const handleObjectionStatus = (objectionId, status) => {
    setObjections((currentObjections) =>
      currentObjections.map((objection) =>
        objection.id === objectionId ? { ...objection, status } : objection
      )
    );
    addNotification(`Objection ${status}`);
  };

  const handlePaymentStatus = (caseId, paymentStatus) => {
    setCases((currentCases) =>
      currentCases.map((caseItem) =>
        caseItem.caseId === caseId ? { ...caseItem, paymentStatus } : caseItem
      )
    );

    if (selectedCase && selectedCase.caseId === caseId) {
      setSelectedCase({ ...selectedCase, paymentStatus });
    }

    setNotifications((currentNotifications) => {
      const newNotifications = [`Payment Status Updated: ${caseId} \u2192 ${paymentStatus}`];

      if (paymentStatus === 'Completed') {
        newNotifications.unshift(`Payment Completed: ${caseId}`);
      }

      return [...newNotifications, ...currentNotifications];
    });
  };

  return (
    <div className="app-container">
      <Navbar onHomeClick={showHome} />
      <main className="main-content">
        {screen === 'home' && (
          <>
            <Hero
              onCitizenLogin={openCitizenLogin}
              onAdminLogin={openAdminLogin}
            />
            <Services />
          </>
        )}

        {screen === 'citizenLogin' && (
          <CitizenLogin
            onLogin={handleCitizenLogin}
            onBack={showHome}
          />
        )}

        {screen === 'adminLogin' && (
          <AdminLogin
            onLogin={() => setScreen('adminDashboard')}
            onBack={showHome}
          />
        )}

        {screen === 'citizenDashboard' && (
          <CitizenDashboard
            cases={cases}
            selectedCase={selectedCase}
            notifications={notifications}
            onSelectCase={handleSelectCase}
            onAddObjection={handleAddObjection}
            onBack={handleLogout}
          />
        )}

        {screen === 'adminDashboard' && (
          <AdminDashboard
            cases={cases}
            objections={objections}
            onObjectionStatusChange={handleObjectionStatus}
            onPaymentStatusChange={handlePaymentStatus}
            onBack={handleLogout}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
