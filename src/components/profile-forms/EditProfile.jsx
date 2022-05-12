import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Form, Button, NavLink } from 'react-bootstrap';
import { createProfile, getCurrentProfile } from '../../actions/profile';
// import { withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    location: '',
    status: '',
    bio: '',
    youtube: '',
    facebook: '',
    instagram: '',
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      bio: loading || !profile.bio ? '' : profile.bio,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading]);

  const { location, status, bio, youtube, facebook, instagram } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, true, navigate('/dashboard'));
  };
  return (
    <>
      <Row>
        <Col className="my-4">
          <h1 className='large text-light'>Edit Your Profile</h1>
          <p className='lead text-light'>
            <i className='fa fa-user text-light'></i> Edit your profile if you need
          </p>
          <small className='text-light'>* = required field</small>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='my-3 text-light'>
              <Form.Label>
                * Tell us about the type of your life style for example Raw
                vegan friuterian eating vegtable as well or just fruits
              </Form.Label>
              <Form.Control
                as='textarea'
                row={1}
                placeholder='Write the current type of your life style'
                name='status'
                value={status}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3 text-light'>
              <Form.Label>City & Country</Form.Label>
              <Form.Control
                value={location}
                onChange={(e) => onChange(e)}
                placeholder='Location'
                name='location'
              />
            </Form.Group>
            <Form.Group className='mb-3 text-light'>
              <Form.Label>* Tell us a little about yourself</Form.Label>
              <Form.Control
                as='textarea'
                row={3}
                placeholder='A short bio of yourself'
                name='bio'
                value={bio}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <>
              <Form.Group className='social-input my-3'>
                <i className='fa fa-facebook fa-2x text-light'></i>
                <Form.Control
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group className=' social-input mb-3'>
                <i className='fa fa-youtube fa-2x text-light'></i>
                <Form.Control
                  type='text'
                  placeholder='YouTube URL'
                  name='youtube'
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group className=' social-input mb-3'>
                <i className='fa fa-instagram fa-2x text-light'></i>
                <Form.Control
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
            </>
            <input type='submit' className='btn btn-dark my-1 border-light' />{' '}
            <a className='btn btn-light my-1 border' href='/dashboard'>
              Go Back
            </a>
          </Form>
        </Col>
      </Row>
    </>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
