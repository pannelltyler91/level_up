import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
