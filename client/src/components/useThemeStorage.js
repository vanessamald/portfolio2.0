import React, { useEffect, useState } from "react";

function useThemeStorage () {
    // set theme styles
    const [ isOn, setIsOn ] = useState('dark');
    const [ theme, setTheme ] = useState('dark');
    const [ componentMounted, setComponentMounted ] = useState(false);
    const [ isCursor, setCursor ] = useState('cursor-dark');

// set localstorage for theme and setTheme/toggler class    
const themeToggler = () => {
    
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        window.localStorage.setItem('toggler', 'light');
        window.localStorage.setItem('cursor', 'cursor-light');
        setTheme('light');
        setIsOn('light');
       // setCursor('cursor-light');
        console.log('THEME IS LIGHT');
    } 
    else { 
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'dark');
        window.localStorage.setItem('cursor', 'cursor-dark');
        setTheme('dark');
        setIsOn('dark');
       // setCursor('cursor-dark');
    } 
}

// get local storage for theme, toggler, and cursor
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localToggler = window.localStorage.getItem('toggler');
    //const localCursor = window.localStorage.getItem('cursor');
    if (localTheme) {
        setTheme(localTheme);
        setIsOn(localToggler);
       //setCursor(localCursor);
    } else {
        setTheme('dark')
        setIsOn('dark');
        setCursor('cursor-dark');
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'dark');
        //window.localStorage.setItem('cursor', 'cursor-dark');
    } 
    setComponentMounted(true);
},
[])
return [ theme, themeToggler, componentMounted, isOn, isCursor ]
};

export default useThemeStorage;