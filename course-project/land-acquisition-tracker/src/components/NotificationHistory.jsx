export default function NotificationHistory({ notifications }) {
  return (
    <div>
      <h2>Notification History</h2>
      {notifications.length === 0 ? (
        <p className="empty-message">No notifications available.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={`${notification}-${index}`}>{notification}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
