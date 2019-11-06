import { hot } from 'react-hot-loader/root';
import React from 'react';
import CommentBox from '#components/CommentBox';
import CommentList from '#components/CommentList';
//import { renderRoutes } from 'react-router-config';
//import Routes from '#client/Routes';

const App = () => {
  return (
    <div className="app">
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default hot(App);
