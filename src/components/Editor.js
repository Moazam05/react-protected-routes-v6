// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Icon Imports
import { FiEdit } from 'react-icons/fi';
// Context Provider
import { useAuth } from '../context/useAuth';

const iconStyle = {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  background: '#957BBE',
  color: '#fff',
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Editor = () => {
  // Context
  const { logout } = useAuth();

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <div className='my-5 card p-4'>
              <h3 className='text-center d-flex justify-content-center align-items-center gap-2'>
                <span style={iconStyle}>
                  <FiEdit />
                </span>{' '}
                Welcome Editor
              </h3>
              <h6 className='text-center my-3'>You are Logged in!</h6>
              <div className='d-flex flex-column gap-3 editor my-4 align-items-center'>
                <Link to='/editor'>Editor Page</Link>
                <Link to='/admin'>Admin Page</Link>
                <Link to='/lounge'>Go to Lounge</Link>
                <Link to='/linkpage'>Go to link Page</Link>
              </div>
              <button
                type='button'
                className='btn btn-editor mb-3'
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
