import { useEffect, useState } from "react";
import { NotificationContainer, NotificationText } from "./style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setNotificationBud } from "../../redux/slices/budsSlice";

interface INotification {
  text: string;
}

const Notification = ({ text }: INotification) => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.buds.notification);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setNotificationBud(false));
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {notification && (
        <NotificationContainer>
          <NotificationText>{text}</NotificationText>
        </NotificationContainer>
      )}
    </>
  );
};

export default Notification;
