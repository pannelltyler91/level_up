import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
    </DndProvider>
  );
}

export default App;
