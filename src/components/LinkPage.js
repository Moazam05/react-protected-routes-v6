// Import React
import React from 'react';
import { Link } from 'react-router-dom';
// Import Icons
import { MdOutlinePublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
// Import CSS
import '../assets/styles/LinkPage.css';

const LinkPage = () => {
  const name = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div>
      <div className='container'>
        <h2 className='text-center mb-3 mt-5'>
          Welcome{' '}
          <span className='text-capitalize'>{name?.userDetails?.userName}</span>
        </h2>
        <h4 className='text-center'>Links Ready to check</h4>
        <div className='my-5'>
          <div className='row'>
            <div className='d-flex justify-content-center gap-5'>
              <div className='col-md-4 col-xl-3'>
                <div className='card bg-c-blue order-card'>
                  <div className='card-block'>
                    <h6 className='m-b-20 d-flex align-items-center gap-1'>
                      <MdOutlinePublic />
                      Public Routes
                    </h6>

                    <Link to='/login'>Login</Link>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-xl-3'>
                <div className='card bg-c-pink order-card'>
                  <div className='card-block'>
                    <h6 className='m-b-20 d-flex align-items-center gap-1'>
                      <RiGitRepositoryPrivateFill />
                      Protected Routes
                    </h6>

                    <div className='d-flex flex-column gap-2'>
                      <Link to='/'>Home</Link>

                      <Link to='/editor'>Editor Page</Link>

                      <Link to='/admin'>Admin Page</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;