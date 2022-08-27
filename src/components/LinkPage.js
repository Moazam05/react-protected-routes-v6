// Import React
import React from 'react';
import { Link } from 'react-router-dom';
// Import Icons
import { MdOutlinePublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
// Import CSS
import '../assets/styles/LinkPage.css';

const LinkPage = () => {
  const name = JSON?.parse(localStorage.getItem('currentUser'));
  const userName = name?.userDetails?.userName;

  return (
    <div className='link-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='my-5 card p-4'>
              <h2 className='text-center mb-4'>
                Welcome <span className='text-capitalize'>{userName}</span>
              </h2>
              <h6 className='text-center mb-4'>
                <span className='text-capitalize'>
                  {!userName && 'Please Login to see Protected Routes details'}
                </span>
              </h6>
              <div className='d-flex justify-content-center gap-5 mt-2 mobile-linkpage'>
                <div className='card bg-c-blue order-card'>
                  <div className='card-block'>
                    <h6 className='m-b-20 d-flex align-items-center gap-1'>
                      <MdOutlinePublic />
                      Public Routes
                    </h6>

                    <Link to='/login'>Login</Link>
                  </div>
                </div>

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
          <div className='col-md-2'></div>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
