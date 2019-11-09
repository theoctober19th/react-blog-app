
import {blogs} from '@data/dummydata';

import createDataContext from '@context/createDataContext'

var idCounter = 0;

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return ([...state, action.payload]);
    case 'delete_post':
      const postId = action.payload;
      return state.filter((item) => item.id !== postId);
    case 'edit_post':
      return state.map((item) => {
        if(item.id === action.payload.id){
          return action.payload;
        }else{
          return item;
        }
      })
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({type: 'add_post', payload:{id: idCounter++, title:title, content:content}})
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_post', payload:id})
  }
}

const editBlogPost = (dispatch) => {
  return(id, title, content) => {
    dispatch({type: 'edit_post', payload:{id:id, title:title, content:content}})
  }
}

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  []
);
