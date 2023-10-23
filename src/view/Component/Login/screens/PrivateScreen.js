import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, Route } from 'react-router-dom';

const PrivateScreen = () => {
  // const logoutHandler = () => {
  //   localStorage.removeItem('authToken');
  //   history.push('/login');
  // };
  // <button onClick={logoutHandler}>Logout</button>

  useEffect(() => {
    !localStorage.getItem('authToken')?
    <Navigate to='/login'/> : <Navigate to='/Main' />
  }, []);

};

export default PrivateScreen;
