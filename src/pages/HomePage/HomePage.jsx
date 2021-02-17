import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PostList from '../../components/Posts/PostList';
import PostDetail from '../../components/PostDetail/PostDetail';

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
              <Switch>
        <Route path="/posts/:id" component={PostDetail} /> 
        <PostList />
        </Switch>
      </>
      </div>
  );

};

export default HomePage;