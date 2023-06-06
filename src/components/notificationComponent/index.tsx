import React, { useState, useEffect } from "react";
import { NotificationContainer, Notification } from "./style";

interface INotificationComponent {
  notifications: Array<any>;
  setNotifications: (e: any) => void;
}

const NotificationComponent = ({
  notifications,
  setNotifications,
}: INotificationComponent) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (notifications.length > 0) {
        setNotifications((prevNotifications: any) =>
          prevNotifications.slice(1)
        );
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [notifications]);

  return (
    <>
      <NotificationContainer>
        {notifications.map((notification) => (
          <Notification key={notification.id}>
            {notification.message}
          </Notification>
        ))}
      </NotificationContainer>
    </>
  );
};

export default NotificationComponent;
