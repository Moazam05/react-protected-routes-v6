// React Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
// React Hook Form
import { useForm } from 'react-hook-form';
// React Toastify
import { toast } from 'react-toastify';
// Context Provider
import { useAuth } from '../context/useAuth';

const Login = () => {
  // Context
  const { login } = useAuth();
  const navigate = useNavigate();

  // React Hook Form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      password: '',
    },
  });

  // Reset States
  const handleReset = () => {
    reset({
      name: '',
      password: '',
    });
  };

  // Form Submit
  const onSubmit = async (data) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
        userName: data?.name,
        password: data?.password,
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
      toast.success('Login Successfully');
      login(result);
      if (result) {
        handleReset();
      }
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
            <div className='my-5 card p-4'>
              <h3 className='text-center mb-4'>Login with Fake API</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3 mt-1'>
                  <label htmlFor='user-name' className='form-label'>
                    User Name
                  </label>
                  <input
                    {...register('name', {
                      required: true,
                      maxLength: 15,
                    })}
                    type='text'
                    id='user-name'
                    className='form-control'
                    placeholder='john doe'
                  />
                  {errors?.name?.type === 'required' && (
                    <div className='text-danger font-small-2 mt-1'>
                      Name is required
                    </div>
                  )}
                  {errors?.name?.type === 'maxLength' && (
                    <div className='text-danger font-small-2 mt-1'>
                      Name cannot greater than 15 characters
                    </div>
                  )}
                </div>
                <div className='mb-3'>
                  <label className='form-label' htmlFor='employee-password'>
                    Password
                  </label>

                  <input
                    {...register('password', {
                      required: true,
                      maxLength: 6,
                    })}
                    type='password'
                    id='employee-password'
                    className='form-control'
                    placeholder='********'
                  />
                  {errors?.password?.type === 'required' && (
                    <div className='text-danger font-small-2 mt-1'>
                      Password is required
                    </div>
                  )}
                  {errors?.password?.type === 'maxLength' && (
                    <div className='text-danger font-small-2 mt-1'>
                      password cannot less than 6 characters
                    </div>
                  )}
                </div>

                <div className='d-flex justify-content-between mt-5'>
                  <button
                    disabled={isSubmitting}
                    type='submit'
                    className='btn btn-primary mb-3'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-1'></span>
                    )}{' '}
                    Login
                  </button>

                  <button
                    type='button'
                    className='btn btn-success mb-3'
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
