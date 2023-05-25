import React, { useEffect, useState } from "react";

function useThemeStorage () {
    // set theme styles
    const [ isOn, setIsOn ] = useState('dark');
    const [ theme, setTheme ] = useState('dark');
    const [ componentMounted, setComponentMounted ] = useState(false);
    const [ cursor, setCursor ] = useState('dark');

// set localstorage for theme and setTheme/toggler class    
const themeToggler = () => {
   
    /*
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', newTheme);
    window.localStorage.setItem('toggler', newTheme);
    window.localStorage.setItem('cursor', newTheme);
    setTheme(newTheme);
    setIsOn(newTheme);
    setCursor(newTheme);
    */
   // console.log('Cursor:', cursor); 
   // console.log(`THEME IS ${newTheme.toUpperCase()}`);
    
   
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        window.localStorage.setItem('toggler', 'light');
        window.localStorage.setItem('cursor', 'light');
        setTheme('light');
        setIsOn('light');
        setCursor('light');
       // console.log('THEME IS LIGHT'); 
       // console.log(cursor);
    } 
    else { 
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'dark');
        window.localStorage.setItem('cursor', 'dark');
        setTheme('dark');
        setIsOn('dark');
        setCursor('dark');
       // console.log('THEME IS DARK');  
       // console.log(cursor)
    }        
}

// get local storage for theme, toggler, and cursor
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localToggler = window.localStorage.getItem('toggler');
    const localCursor = window.localStorage.getItem('cursor');
    if (localTheme) {
        setTheme(localTheme);
        setIsOn(localToggler);
        setCursor(localCursor);
        
    } else {
        setTheme('dark');
        setIsOn('dark');
        setCursor('dark');
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'dark');
        window.localStorage.setItem('cursor', 'dark');
    
    } 
    
    setComponentMounted(true);
},
[cursor, theme, isOn])

return [ theme, themeToggler, componentMounted, isOn, cursor, setCursor ]
};

export default useThemeStorage;