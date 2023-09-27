import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGreeting, setGreeting } from '../redux/features/messages/messagesSlice';

const Message = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    const fetchGreeting = async () => {
      const response = await fetch('http://localhost:3000/api/v1/messages');
      const data = await response.json();
      dispatch(setGreeting(data.greetings));
    };

    fetchGreeting();
  }, [dispatch]);

  return (
    <div>
      <h1><u>Random Greeting</u></h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Message;
