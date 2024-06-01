// src/sitemap-routes.js

import React from 'react';
import { Route } from 'react-router-dom';
import SortPosts from './Components/SortPosts/SortPosts';
import TaxonomyList from './Components/SortPosts/TaxonomyList';
import PostsList from './Components/SortPosts/PostsList';
import NotFound from './Components/NotFound/NotFound';

const routes = (
  <Route>
    <Route exact path='/' component={SortPosts} />
    <Route exact path='/states' component={TaxonomyList} />
    <Route exact path='/cities' component={TaxonomyList} />
    <Route exact path='/categories' component={TaxonomyList} />
    <Route exact path='/technology' component={TaxonomyList} />
    <Route exact path='/:taxonomy/:termId' component={PostsList} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;
