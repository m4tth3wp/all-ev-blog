import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import TwitterFeed from '../../components/TwitterFeed/TwitterFeed'
import PostList from '../../components/Posts/PostList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './HomePage.css'



const HomePage = (props) => {
  return (
    <>
    <div className="HomePage">
      
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}/>
      <Container>
      <Row>
        <Col sm={8}><PostList/></Col>
        <Col sm={4}>
        <TwitterFeed />
        </Col>
      </Row>
      </Container>
      </div>
      </>
  );

};

export default HomePage;