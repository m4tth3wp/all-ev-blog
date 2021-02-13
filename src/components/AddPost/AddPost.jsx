import React, {useState} from "react";
import { Link } from 'react-router-dom';

function AddPost(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

  return (
    <div className='NavBar'>
      <header> Add Post</header>
      <form onSubmit={handleSubmit}>
          <input type='text' name="title" placeholder="Title"></input>
          <input type='text' name="description" placeholder="Content"></input>
          <select name="category">
            <option disabled selected>Post Category</option>
            <option value="Cars">Cars</option>
            <option value="Bikes">Bikes</option>
            <option value="Charging">Charging</option>
            <option value="News">News</option>
            <option value="Stocks">Stocks</option>
          </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddPost;