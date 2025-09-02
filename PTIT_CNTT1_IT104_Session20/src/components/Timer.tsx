import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []); 

  return (
    <div>
      <h1>Bộ đếm thời gian</h1>
      <p >Thời gian: {count} giây</p>
    </div>
  );
};

export default Timer;