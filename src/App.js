import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Profile/Profile';
import Messages from './Pages/Messages/Messages';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/settings' element = {<Settings/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/messages' element = {<Messages/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
