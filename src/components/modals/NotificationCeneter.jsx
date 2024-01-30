import  { useState, useEffect } from 'react';
import WebSocket from 'react-websocket';
import "./notificationCenter.css"

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  // Function to handle incoming notifications from WebSocket
  const handleNotification = (notification) => {
    const newNotification = JSON.parse(notification);
    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
  };

  useEffect(() => {
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      // Close the WebSocket connection or perform any cleanup
    };
  }, []);

  return (
    <div className='notification'>
      <h2>Notification Center</h2>
      <WebSocket
        url="ws://your-websocket-server-url"
        onMessage={handleNotification}
      />
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
