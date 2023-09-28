import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGreeting, fetchGreetingAsync } from '../redux/features/messages/messagesSlice';

const Message = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    dispatch(fetchGreetingAsync());
  }, [dispatch]);

  return (
    <div>
      <h1><u>Random Greeting</u></h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Message;
