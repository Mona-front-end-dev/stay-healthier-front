import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const ProfileTop = ({
  profile: {
    status,
    location,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="bg-light text-center p-4">
      <img className="my-1 img-thumbnail" src={avatar} alt="" />
      <h2>{name}</h2>
      <p className="lead">{status}</p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {social && social.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook fa-2x text-dark mx-2"></i>
          </a>
        )}
        {social && social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram fa-2x text-dark mx-2"></i>
          </a>
        )}
        {social && social.youtube && (
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube fa-2x text-dark mx-2"></i>
          </a>
        )}
      </div>
    </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileTop
