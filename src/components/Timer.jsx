import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
    }, 30 ); 

  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Timer: {count} seconds</h1>
    </>
  );
}

export default Timer;
