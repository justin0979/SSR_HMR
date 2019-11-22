import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from '@client/Routes';

const App = () => {
  return <div>{renderRoutes(Routes)}</div>;
};

export default App;
