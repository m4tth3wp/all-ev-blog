import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import postService from '../../utils/postService';
import axios from 'axios';

class ProfilePage extends React.Component {
  state = {
    title: '',
    description: ''
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



// function ProfilePage(props) {

//   const submitPost = async () => {
//     const res = await axios.post('http://localhost:3000/api/posts/')
//     console.log(res);
// }

//    const handleSubmit = (e) => {
//        e.preventDefault();
//        console.log(e)
//        postService.index()
//    }

//  return (
//    <div className='NavBar'>
//      <Link to='/'>HOME</Link>
//      <header> {props.user.name} Add Post</header>
//      <form onSubmit={submitPost}>
//          <input type='text' name="title" placeholder="Title"></input>
//          <input type='text' name="description" placeholder="Content"></input>
//          {/* <select name="category">
//            <option disabled selected>Post Category</option>
//            <option value="Cars">Cars</option>
//            <option value="Bikes">Bikes</option>
//            <option value="Charging">Charging</option>
//            <option value="News">News</option>
//            <option value="Stocks">Stocks</option>
//          </select> */}
//        <button>Submit</button>
//      </form>
//    </div>
//  );
// };