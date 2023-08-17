
import './Ram.css' ;
import React from 'react';

// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import ResumeTemplate from './Home/ResumeTemplate';
// import MyResume from './Home/MyResume';
// import AboutUs from './Home/AboutUs';
import {Link } from 'react-router-dom';


// import HomePage from './Home/HomePage';

export default function NavBar() {
  return (
    <div style={{backgroundColor:"white",display:"flex",justifyContent:"flex-end",height:"50px",borderBottom:"1px solid grey"}}>
      {/* <h2>this is nav-link</h2> */}
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5,textDecoration:'none' }}>
          Resume Template
          </Link>
          <Link to="/myresume"  style={{ padding: 5,textDecoration:'none'  }}>
          My Resume
          </Link>
          <Link to="/aboutus"  style={{ padding: 5,textDecoration:'none'  }}>
          About us
          </Link>

          </nav>
      
      
    </div>
  )
}
