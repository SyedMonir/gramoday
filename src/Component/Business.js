import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Business = ({ children }) => {
  const [user] = useOutletContext();
  console.log(user);
  return (
    <div>
      <h2>Business</h2>
    </div>
  );
};

export default Business;
