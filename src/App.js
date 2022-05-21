/*This is the root DOM file in the tree. Every other componenet stems off of this one */

import React from 'react'; /* For every componenet, in order for React to understand JSX, we need to import React. */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; /* routes that allows the page to change*/
import { Link } from 'react-router-dom' /*Allows us to actually make clickable page links */

import './CSS/App.css'

import Home from './Pages/Home'
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import Interests from './Pages/Interests'
import Projects from './Pages/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Interests" element={<Interests />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
The <Routes> container loads dynamic content. So I would put my page components in this container. Whenever I am on a different path, 
Routes will load the specified component. To manually change paths, i go to the URL and add the extra path. To change with a button or something,
I need <Link>. Also, Everything outside the <Routes> is the same so only the things in <Route> will change. So if I wanted a NavBar I would put it outside
of <Route>
*/
