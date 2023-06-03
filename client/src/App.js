import React, { useState, useEffect } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Home from '../src/components/Home';
import Loading from '../src/components/Loading';
import useThemeStorage from './components/useThemeStorage.js';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [theme, toggleTheme, cursor, setCursor, componentMounted, isOn] = useThemeStorage();
   
  // set loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  
  useEffect(()=> {
    if (!componentMounted) {
      return null; // Render null or loading indicator while the component is mounting
    }
    console.log(theme);
  })
  
  return (
    <div className={theme}>
      <Cursor cursor={cursor}/>
      {isLoading ? <Loading/> : <Home/>}
    </div>
  );
}

export default App;
