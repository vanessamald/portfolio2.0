import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [typedText, setTypedText] = useState('');
    const text = '...';
  
    useEffect(() => {
      let currentIndex = 0;
  
      const timerId = setInterval(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);

        currentIndex++;
  
        if (currentIndex === text.length) {
          clearInterval(timerId);
        }
      }, 100); // Typing speed in milliseconds
  
      return () => {
        clearInterval(timerId);
      };
    }, []);


  return (
    <div className="loading-page">
      <h1>Loading...</h1>
      <div className='line-div'></div>
    </div>
  );
};

export default Loading;
