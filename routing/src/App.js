import React from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Item from "./ItemDetail";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    // anything we add between this router will have the ability to use routing.
    <Router>
      <div className="App">
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" exact element={<Shop/>}/>
            {/* youtuber was using deprecated components instead of react-18 "element" */}
            <Route path="/shop/:id" element={<Item/>} />
          </Routes>
      </div>
    </Router>
  );
}


const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>
}
export default App;
