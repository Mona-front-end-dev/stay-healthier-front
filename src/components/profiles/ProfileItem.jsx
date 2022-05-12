import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user,
    status,
    location,
  },
}) => {
  return (
    <div className='bg-light d-flex m-4 justify-content-around'>
      <img className="img-thumbnail my-4" src={user?.avatar} alt='' />
      <div className="my-4">
        <h2>{user?.name}</h2>
        <p>{status}</p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <NavLink to={`/profile/${user?._id}`} className='btn btn-dark my-4'>
          View Profile
        </NavLink>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
