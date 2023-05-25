import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [typedText, setTypedText] = useState('');
  const text = 'Loading';

  useEffect(() => {
    let currentIndex = 0;

    const timerId = setInterval(() => {
      const currentChar = text[currentIndex];
      setTypedText(prevText => prevText + currentChar);

      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(timerId);
      }
    }, 150);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  console.log(typedText);

  return (
    <div className="loading-page">
      <h1 className="loading-text">{typedText}</h1>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;


