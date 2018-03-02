import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../app';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
//import CoursesPage from './components/course/CoursesPage';
//import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
//import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);