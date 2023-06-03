import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [typedText, setTypedText] = useState('');
  const [ typedText2, setTypedText2 ] = useState('');
  const text = 'The Best is Yet to Come';
  const text2 = 'Lo Mejor Esta por Venir';

  useEffect(() => {
    let currentIndex = 0;

    const timerId = setInterval(() => {
      const currentChar = text[currentIndex];
      const currentChar2 = text2[currentIndex];
      setTypedText(prevText => prevText + currentChar);
      setTypedText2(prevText => prevText + currentChar2);

      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(timerId);
      }
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="loading-page">
      <h1 className="loading-text small-text">{typedText}</h1>
      <div className="loader"></div>
      <h1 className='loading-text small-text'>{typedText2}</h1>
    </div>
  );
};

export default Loading;