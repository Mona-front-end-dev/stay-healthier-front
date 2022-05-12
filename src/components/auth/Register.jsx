import React, { useState } from 'react';
import { Row, Form, Col, Button, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Row>
      <Col>
        <h1 className='large text-light my-4'>Sign Up</h1>
        <p className='lead text-light'>
          <i className='fa fa-user text-light'></i> Create Your Account
        </p>
        <Form className='form' onSubmit={(e) => onSubmit(e)}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <Form.Text className='text-light'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </Form.Group>
          <Button type='submit' variant='dark' className='my-4'>
            Register
          </Button>
        </Form>
        <p className='my-1 text-light'>
          Already have an account? <Button href='/login' className="bg-light text-dark border">Sign In</Button>
        </p>
      </Col>
    </Row>
  );
};

Register.propType = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
