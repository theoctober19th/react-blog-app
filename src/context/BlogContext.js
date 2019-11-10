
import {blogs} from '@data/dummydata';

import createDataContext from '@context/createDataContext'
import typicode from '@api/typicode';

var idCounter = 0;

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'refresh_posts':
      return action.payload;
    // case 'add_post':
    //   return ([...state, action.payload]);
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
  return async (title, content) => {
    try{
      await typicode.post('/posts', {id: idCounter++, title:title, content:content});
    }catch(e){
      console.log(e);
    }
    //dispatch({type: 'add_post', payload:{id: idCounter++, title:title, content:content}})
  }
}

const refreshBlogList = (dispatch) => {
  return async () => {
    try{
      const response = await typicode.get('/posts');
      dispatch({type: 'refresh_posts', payload: response.data})
    }catch(e){
      console.log('error occurred' + e)
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    //dispatch({type: 'delete_post', payload:id})
    try{
      await typicode.delete(`posts/${id}`);
      dispatch({type: 'delete_post', payload: id})
    }catch(e){
      console.log(e);
    }
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content) => {
    //dispatch({type: 'edit_post', payload:{id:id, title:title, content:content}})
    try{
      await typicode.put(`posts/${id}`, {id, title, content})
    }catch(e){
      console.log(e);
    }
  }
}

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, refreshBlogList},
  []
);
