import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearNotification());
    }, notification.time);
  }, [notification.message, dispatch, notification.time]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  console.log(notification);
  return (
    notification.message && <div style={style}>{notification.message}</div>
  );
};

export default Notification;
