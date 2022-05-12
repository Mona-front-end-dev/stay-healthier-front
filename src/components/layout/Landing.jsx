import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Row className='mt-5'>
      <Col className='form-wrapper '>
        <Form.Group className='mb-5 text-center pt-5 mt-5'>
          <Form.Text className='text-dark fs-3'>
            <h2 className='fw-bold'>Fruiterians Community</h2>
            Create a fruiterian profile and share posts.
          </Form.Text>
        </Form.Group>
        <div className='btn-wrapper pb-5'>
          <Button href='/register' variant='dark' type='submit'>
            Sign Up
          </Button>
          <Button href='/login' type='submit' variant='light'>
            Login
          </Button>
        </div>
      </Col>
    </Row>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
