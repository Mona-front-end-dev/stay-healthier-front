import axios from 'axios'
import { setAlert } from './alert'
import { DELETE_POST, GET_POSTS, POST_ERROR, ADD_POST } from './types'

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://butikrea.wwwnl1-ss15.a2hosted.com/api/posts',
    )
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://butikrea.wwwnl1-ss15.a2hosted.com/api/posts/${id}`,
    )

    dispatch({
      type: DELETE_POST,
      payload: id,
    })

    dispatch(setAlert('Post Removed', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post(
      'http://butikrea.wwwnl1-ss15.a2hosted.com/api/posts',
      formData,
      config,
    )
    dispatch({
      type: ADD_POST,
      payload: res.data,
    })

    dispatch(setAlert('Post Created', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
