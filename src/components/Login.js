// React Imports
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Context Provider
import { useAuthContext } from '../context/AuthProvider';
// React Toastify
import { toast } from 'react-toastify';

const Login = () => {
  // Context
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // States
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Local Storage
  const userCheck = JSON.parse(localStorage.getItem('currentUser'));

  // Form Submit
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
        roles: [1996],
        // roles: [1996, 2022],
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
      toast.success('Login Successfully');
      // window.location.href = '/linkpage';
      navigate(from, { replace: true });
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

                  <button
                    disabled={!userCheck?.userDetails?.userName}
                    type='button'
                    className='btn btn-success mb-3'
                    onClick={() => {
                      localStorage.removeItem('currentUser');
                      toast.error('Logout Successfully');
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>

                  <button
                    type='button'
                    className='btn btn-danger mb-3'
                    onClick={() => navigate('/linkpage')}
                  >
                    All Links
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
