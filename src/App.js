
import './App.css';
import HomePage from './components/Home/HomePage';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter,Routes,Route
 } from 'react-router-dom';

 import MyResume from './components/Resume Display/MyResume';
 import AboutUs from './components/About Us/AboutUs';
 import NoMatch from './components/Home/NoMatch';
 import DetailsFilingPage from './components/DetailFilingPage/DetailsFilingPage';


function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        
        <Route path="/myresume" element={<MyResume/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/details" element={<DetailsFilingPage/>}/>
        <Route path="*" element={<NoMatch />} />
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
