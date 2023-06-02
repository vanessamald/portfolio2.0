import React, { useState, useEffect } from 'react';

const AnimatedNumbers = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let animationInterval;
    if (currentNumber < targetNumber) {
      animationInterval = setInterval(() => {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      }, 500); 
    }

    return () => clearInterval(animationInterval);
  }, [currentNumber, targetNumber]);

  return <div className='transparent numbers'>0{currentNumber}</div>;
};

export default AnimatedNumbers;