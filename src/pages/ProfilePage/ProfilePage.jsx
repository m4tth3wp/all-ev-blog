import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import './ProfilePage.css';

class ProfilePage extends React.Component {
  state = {
    title: '',
    description: '',
    category: '',
    image: '',
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
       e.preventDefault();
       const post = {
         title: this.state.title,
         description: this.state.description       }
         this.props.history.push('/');
       axios.post('/api/posts/', this.state)
       .then( res => {
         console.log(post)
       })
   }
  render() {
    return(
    <>
      <div className='NavBar'>
     <Link to='/'>HOME</Link>
     </div>
     <header>  Add Post</header>
     <Form onSubmit={this.handleSubmit}>
        {/* Title */}
         <Form.Control
          type='text' 
          name="title" 
          placeholder="Title" 
          value={this.state.title}
          onChange={this.handleChange}/>
         {/* Description */}
         <Form.Control 
         type='text' 
         name="description" 
         placeholder="Description" 
         value={this.state.description}
         onChange={this.handleChange}/>
         {/* Category */}
        <label>Category</label>         
         <select value={this.state.category} name='category' onChange={this.handleChange}>
            <option value="Cars">Cars</option>
            <option value="Bikes">Bikes</option>
            <option value="Charging">Charging</option>
            <option value="News">News</option>
            <option value="Stocks">Stocks</option>
          </select>
        {/* Image */}
        <Form.Control 
         type='text' 
         name="image" 
         placeholder="Image" 
         value={this.state.image}
         onChange={this.handleChange}/>
       <button>Submit</button>
     </Form>
   </>
    )
  }
}
  
  export default ProfilePage;