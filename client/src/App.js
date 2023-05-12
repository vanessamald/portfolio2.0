import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Cursor from '../src/components/cursor';
import Home from '../src/components/Home';
import Loading from '../src/components/Loading';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  
  // set loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div>
      <Cursor/>
      {isLoading ? <Loading/> : <Home/>}
    </div>
  );
}

export default App;
