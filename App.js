import React from 'react';
import './App.css';
import SearchBar from './Search';
import Post from './Post';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  // uses routers to create link to homepage, post a quesiton, and findaquestion components. When the following link will be clikced the respective componenet will be rendered. 
  return (
    <div className="body"> 
    <Router>
        <nav>
        <Link to="/FindaQuestion" className='header-link'>Find a Question</Link>   <Link to="/Post" className='header-link'>Post</Link> 
        </nav>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/FindaQuestion" element={<SearchBar/>}/>
        <Route path="/Post" element={<Post/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
