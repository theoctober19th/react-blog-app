
import {blogs} from '@data/dummydata';

import createDataContext from '@context/createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return ([...state, action.payload]);
    case 'delete_post':
      const postId = action.payload;
      return state.filter((item) => item.id !== postId);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'add_post', payload:{id: 7, title:"added new", content:"ahhahahahahaha"}})
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_post', payload:id})
  }
}

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  blogs
);
