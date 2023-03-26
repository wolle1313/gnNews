import React from 'react';
import { Routes, Route } from "react-router-dom";

import { BasicLayout } from './BasicLayout';
import { Articles } from './articles/Articles';
import { PageNotFound } from './PageNotFound';
import { Sources } from './sources/Sources';

const App = () => {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path='/' element={<Sources />} />
        <Route path='/country/:country' element={<Articles />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
