import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const gyms = useSelector(state => state.gym.gyms);
  const fetchState = useSelector(state => state.gym.fetchState);

  return (
    <div>
      sample
    </div>
  );
};

export default Result;
