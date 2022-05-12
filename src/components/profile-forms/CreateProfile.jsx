import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Form, Button, NavLink } from 'react-bootstrap';
import { createProfile } from '../../actions/profile';
import { useNavigate } from 'react-router-dom';

const CreateProfile = ({ createProfile }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    location: '',
    status: '',
    bio: '',
    youtube: '',
    facebook: '',
    instagram: '',
  });

  const { location, status, bio, youtube, facebook, instagram } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate('/dashboard'));
  };
  return (
    <>
      <Row>
        <Col>
          <h1 className='large text-black my-4'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fa fa-user'></i> Let's get some information to make
            your profile stand out
          </p>
          <small>* = required field</small>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='my-3'>
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
            <Form.Group className='mb-3'>
              <Form.Label>City & Country</Form.Label>
              <Form.Control
                value={location}
                onChange={(e) => onChange(e)}
                placeholder='Location'
                name='location'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
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
                  <i className='fa fa-facebook fa-2x'></i>
                  <Form.Control
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className=' social-input mb-3'>
                  <i className='fa fa-youtube fa-2x'></i>
                  <Form.Control
                    type='text'
                    placeholder='YouTube URL'
                    name='youtube'
                    value={youtube}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className=' social-input mb-3'>
                  <i className='fa fa-instagram fa-2x'></i>
                  <Form.Control
                    type='text'
                    placeholder='Instagram URL'
                    name='instagram'
                    value={instagram}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
              </>
            
            <input type='submit' className='btn btn-dark my-1' />{' '}
            <a className='btn btn-light my-1 border' href='/dashboard'>
              Go Back
            </a>
          </Form>
        </Col>
      </Row>
    </>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
