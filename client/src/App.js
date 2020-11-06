import React, { useEffect } from 'react';
import './App.css';

function App() {
  const callHelloWorld = async () => {
    let res = await fetch(`${process.env.REACT_APP_HOST_SERVER}?a=1&b=2`);
    let obj = await res.json();
    console.log(obj);
  };

  useEffect(() => {
    callHelloWorld();
  });

  return (
    <div className='App'>
      <h1>OK nha</h1>
    </div>
  );
}

export default App;
