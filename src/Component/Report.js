import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Report = () => {
  const { reportID } = useParams();
  return (
    <>
      <Navbar>Pr</Navbar>
    </>
  );
};

export default Report;
