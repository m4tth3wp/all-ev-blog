import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      < HomePage />
      < SignIn />
      < SignUp />
      < Route />
    </div>
  );
}

export default App;
