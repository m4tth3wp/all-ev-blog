import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PostList from '../../components/Posts/PostList';
import PostDetail from '../../components/PostDetail/PostDetail';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      posts: [],
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {
    };
  }
  /*--- Callback Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className='header-footer'><h1>All EVs</h1></header>
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/profile' render={props => 
            <ProfilePage {...props} user={this.state.user} />
          } />
        </Switch>
        <Switch>
        <Route path="/posts/:id" component={PostDetail} /> 
        
        </Switch>
        

      </div>
    );
  }
}

export default App;
