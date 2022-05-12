import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <NavLink to='/edit-profile' className='btn btn-light border'>
        <i className='fa fa-user-circle text-secondary'></i> Edit Profile
      </NavLink>{' '}
      <NavLink to='/add-experience' className='btn btn-light border'>
        <i className='fa fa-black-tie text-secondary'></i> Add Experience
      </NavLink>
     
    </div>
  );
};

export default DashboardActions;
