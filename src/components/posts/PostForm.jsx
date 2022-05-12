import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'
import { Form } from 'react-bootstrap'

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('')

  return (
    <>
      <div className="bg-transparent text-light">
        <h3>Leave your question or feedback 🔈</h3>
      </div>
      <Form
        className="my-1"
        onSubmit={(e) => {
          e.preventDefault()
          addPost({ text })
          setText('')
        }}
      >
        <Form.Control
          as="textarea"
          name="text"
          cols="30"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Create a post"
          required
        ></Form.Control>
        <input type="submit" className="btn btn-dark my-4 border-light" value="Submit" />
      </Form>
    </>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
