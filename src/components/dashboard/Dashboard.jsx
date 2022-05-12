import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <div className='text-secondary ' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  ) : (
    <>
      <h1 className='large text-light my-4'>Dashboard</h1>
      <p className='text-light'>
        <i className='fa fa-user text-light'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />

          <div className="my-2">
            <Button className="btn btn-danger" onClick={() => deleteAccount()}>
              Delete My Account
            </Button>
          </div>
        </>
      ) : (
        <>
          <p>You have not set up a profile yet, please add some info </p>
          <NavLink to='/create-profile' className='btn btn-dark my-1'>
            Create profile
          </NavLink>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
