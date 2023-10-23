import { useEffect, useState } from 'react';
import axios from 'axios';

const PrivateScreen = ({ history }) => {
  // const logoutHandler = () => {
  //   localStorage.removeItem('authToken');
  //   history.push('/login');
  // };
  // <button onClick={logoutHandler}>Logout</button>

  useEffect(() => {
    !localStorage.getItem('authToken')?
      history.push('/login') : history.push('/Main')
  }, [history]);

};

export default PrivateScreen;
