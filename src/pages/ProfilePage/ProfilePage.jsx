import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
       axios.post('http://localhost:3000/api/posts/', this.state)
       .then( res => {
         console.log(post)
       })
   }
  render() {
    return(
    <div className='NavBar'>
     <Link to='/'>HOME</Link>
     <header>  Add Post</header>
     <form onSubmit={this.handleSubmit}>
         <input
          type='text' 
          name="title" 
          placeholder="Title" 
          value={this.state.title}
          onChange={this.handleChange}></input>
         <input 
         type='text' 
         name="description" 
         placeholder="Description" 
         value={this.state.description}
         onChange={this.handleChange}></input>
       <button>Submit</button>
     </form>
   </div>
    )
  }
}
  
  export default ProfilePage;