import React, { useState } from 'react';
import Tweet from "./tweet";

function App(){
  const [users, setUsers] = useState ([
    {name: "Ed" , message: "hello"},
    {name: "Sal", message: "everday is annoying"},
    {name: "random_person", message: "they told me to post something here."}
  ]);
  
  

  return(
      <div className="app">
        {users.map(user => (
          <Tweet name={user.name} message ={user.message}/>
        ))}
      </div>
  );
}

export default App;
