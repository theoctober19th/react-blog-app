import React from 'react';
import axios from 'axios';

const instance = axios.create(
  {
    //baseURL: 'http://my-json-server.typicode.com/theoctober19th/react-blog-app'
    baseURL: 'http://78da42bb.ngrok.io'
  }
);

export default instance;
