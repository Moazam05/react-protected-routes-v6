// // React Imports
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // Icon Imports
// import { MdOutlineSecurity } from 'react-icons/md';

// const iconStyle = {
//   width: '2.5rem',
//   height: '2.5rem',
//   borderRadius: '50%',
//   background: '#CC9F8B',
//   color: '#fff',
//   fontSize: '20px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const Missing = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-4'></div>
//           <div className='col-md-4'>
//             <div className='my-5 card p-4'>
//               <h3 className='text-center d-flex justify-content-center align-items-center gap-2'>
//                 <span style={iconStyle}>
//                   <MdOutlineSecurity />
//                 </span>{' '}
//                 404
//               </h3>
//               <h6 className='text-center my-3'>Page Not Found!</h6>

//               <button
//                 type='button'
//                 className='btn btn-404 text-white mb-3'
//                 onClick={() => {
//                   navigate('/');
//                 }}
//               >
//                 Go Back
//               </button>
//             </div>
//           </div>
//           <div className='col-md-4'></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Missing;

import React from 'react';

const Missing = () => {
  return <div>Missing</div>;
};

export default Missing;
