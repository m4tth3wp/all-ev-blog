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
        {/* Title */}
         <input
          type='text' 
          name="title" 
          placeholder="Title" 
          value={this.state.title}
          onChange={this.handleChange}></input>
         {/* Description */}
         <input 
         type='text' 
         name="description" 
         placeholder="Description" 
         value={this.state.description}
         onChange={this.handleChange}></input>
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
        <input 
         type='text' 
         name="image" 
         placeholder="Image" 
         value={this.state.image}
         onChange={this.handleChange}></input>
       <button>Submit</button>
     </form>
   </div>
    )
  }
}
  
  export default ProfilePage;