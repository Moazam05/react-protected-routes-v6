import React, { useState } from 'react';

import { useAuthContext } from '../context/AuthProvider';

const Login = () => {
  // Context
  const { setAuth } = useAuthContext();

  // States
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
        userName: name,
        password: password,
        verified: true,
        blocked: false,
        delay: 20,
        roles: [2010, 2015],
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      const result = await fetch('/login', requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log(error));
      localStorage.setItem('currentUser', JSON.stringify(result));
      // console.log('[[[[[[[[[[[[[', result);
      setAuth(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='my-5'>
              <h3 className='text-center mb-4'>Login with Fake API</h3>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='exampleInputName1' className='form-label'>
                    UserName
                  </label>
                  <input
                    required
                    type='text'
                    className='form-control'
                    id='exampleInputName1'
                    aria-describedby='nameHelp'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    required
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className='d-flex justify-content-between'>
                  <button type='submit' className='btn btn-primary mb-3'>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
