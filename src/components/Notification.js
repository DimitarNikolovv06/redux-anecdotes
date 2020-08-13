import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const voteRef = useRef();

  useEffect(() => {
    if (voteRef.current) clearTimeout(voteRef.current);

    let timer = setTimeout(() => {
      dispatch(clearNotification());
    }, notification.time);

    voteRef.current = timer;
  }, [notification.message, dispatch]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  return (
    notification.message && <div style={style}>{notification.message}</div>
  );
};

export default Notification;
