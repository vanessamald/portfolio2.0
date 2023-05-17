import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [typedText, setTypedText] = useState('');
    const text = 'Loading';
  
    useEffect(() => {
      let currentIndex = 0;
  
      const timerId = setInterval(() => {
        //setTypedText((prevText) => prevText + text[currentIndex]);
        
        console.log(text[currentIndex]);
        setTypedText(text[currentIndex]);

        currentIndex++;
        console.log(typedText);
        
        if (currentIndex === text.length ) {
          clearInterval(timerId);
        }
      }, 150); // Typing speed in milliseconds
  
      return () => {
        clearInterval(timerId);
      };
    }, []);


  return (
    <div className="loading-page">
     <h1 className='loading-text'>{typedText}</h1>
    </div>
  );
};

export default Loading;
