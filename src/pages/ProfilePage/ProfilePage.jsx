import React from 'react';
import { Link } from 'react-router-dom';
import AddPost from '../../components/AddPost/AddPost'

const ProfilePage = () => (
    <div>
       <h1> Your Profile Page </h1>
       <Link to='/'>HOME</Link>
       <AddPost  />
    </div>
  );
  
  export default ProfilePage;