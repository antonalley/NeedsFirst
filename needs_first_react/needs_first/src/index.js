import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; //runs react-router-dom v5.2.0, handles changes in url
import PostsHome from './main/Posts'

function MainRouter() { 
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={PostsHome}></Route>
      </Switch>
    </Router>
  );
}

//root is a div tag in public/index/html, React renders component inside of tag

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MainRouter />
);
