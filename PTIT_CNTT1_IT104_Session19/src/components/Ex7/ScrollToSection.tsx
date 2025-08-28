import React, { useRef } from 'react';

export default function ScrollToSection() {
  const contentRef = useRef<HTMLSpanElement>(null);

  const handleFocus = () => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  };

  return (
    <div className="container">
      <button onClick={handleFocus} className="focus-button">
        Đi tới phần nội dung
      </button>
      <div style={{ height: '500px' }}></div>
      <span
        ref={contentRef}
        tabIndex={0}
        className="content"
      >
        hihii - Đây là nội dung chính
      </span>
    </div>
  );
}