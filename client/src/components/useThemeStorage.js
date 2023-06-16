import React, { useEffect, useState } from "react";

function useThemeStorage () {
    // set theme styles
    const [ isOn, setIsOn ] = useState('dark');
    const [ theme, setTheme ] = useState('dark');
    const [ componentMounted, setComponentMounted ] = useState(false);

// set localstorage for theme and setTheme/toggler class    
const themeToggler = () => {
 
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        window.localStorage.setItem('toggler', 'light');
        setTheme('light');
        setIsOn('light');
       // console.log('THEME IS LIGHT'); 
    } 
    else { 
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'dark');
        setTheme('dark');
        setIsOn('dark');
       // console.log('THEME IS DARK');  
    }     
}

// get local storage for theme, toggler, and cursor
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localToggler = window.localStorage.getItem('toggler');
    if (localTheme) {
        setTheme(localTheme);
        setIsOn(localToggler);
    } else {
        setTheme('dark');
        setIsOn('dark');
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'dark');
    } 
    
    setComponentMounted(true);
},
[ theme, isOn ])

return [ theme, themeToggler, componentMounted, isOn ]
};

export default useThemeStorage;