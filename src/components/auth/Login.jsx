import React, { useState } from 'react';
import { Row, Form, Col, Button, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Navigate } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Row>
      <Col>
        <h1 className='large text-light my-4'>Sign In</h1>
        <p className='lead text-light'>
          <i className='fa fa-user text-light'></i>{' '} Sign into Your Account
        </p>
        <Form className='form' onSubmit={(e) => onSubmit(e)}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
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
          <Button type='submit' variant='dark'>
            Sign In
          </Button>
        </Form>
        <p className='my-4 text-light'>
          Don't have an account?{' '}<Button href='/register' className="bg-light text-dark border">Sign up</Button>
        </p>
      </Col>
    </Row>
  );
};

login.PropTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
