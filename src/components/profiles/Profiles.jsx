import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'
import { Row, Col } from 'react-bootstrap'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [])
  return (
    <Row>
      <Col>
        {loading ? (
          <div className="spinner-border text-secondary"></div>
        ) : (
          <>
            <h1 className="large text-dark my-4">Members</h1>
            <p className="load">Brows and connect with members</p>
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profile found.. .</h4>
              )}
            </div>
          </>
        )}
      </Col>
    </Row>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
