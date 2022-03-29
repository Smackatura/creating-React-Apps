import React from 'react';
import Tweet from "./tweet";

function App(){
  
  return(
    <div className="app">
      
      <Tweet name="one" msg="say something" likes="3"/>
      <Tweet name="two" msg="say it again" likes="6"/>
      <Tweet name="three" msg="whats the matter to you?" likes="45"/>
      <Tweet name="four" msg="yeah boy.." likes="0"/>
    
    </div>
  );
}

export default App;
