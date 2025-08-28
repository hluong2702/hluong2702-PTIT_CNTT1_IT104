import React, { useEffect, useState } from 'react';

export default function KeyTracker() {
  const [key, setKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="key-container">
      <h2>Phim ban vừa nhấn</h2>
      <span className="key-display">
        Phím bạn vừa ấn: {key || 'Chưa nhấn phím nào'}
      </span>
    </div>
  );
}