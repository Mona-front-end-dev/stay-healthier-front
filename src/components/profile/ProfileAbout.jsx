import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
  profile: {
    bio,
    user: { name },
  },
}) => {
  return (
    <div className="bg-light p-4 my-4 text-center">
      <h2 className="text-dark">{name.trim().split(' ')[0]}'s Bio</h2>
      <p>{bio}</p>
    </div>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileAbout
