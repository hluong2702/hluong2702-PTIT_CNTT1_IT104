import React, { useState, useEffect } from "react";
import "./style.css";

interface Quote {
  text: string;
  author?: string;
}

export default function RandomQuote() {
  const quotes: Quote[] = [
    { text: "Học, học nữa, học mãi.", author: "Lênin" },
    { text: "Thất bại là mẹ thành công.", author: "Tục ngữ" },
    { text: "Không gì là không thể.", author: "Khuyết danh" },
    { text: "Kiến tha lâu đầy tổ.", author: "Tục ngữ" },
    { text: "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.", author: "Tục ngữ" },
  ];

  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handleBtn = () => {
    let newQuote: Quote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === quote?.text);
    setQuote(newQuote);
  };

  return (
    <div className="quote-container">
      <button onClick={handleBtn} className="quote-button">
        Lấy câu trích dẫn
      </button>
      {quote && (
        <div className="quote-text">
          <span>"{quote.text}"</span>
          {quote.author && <p>- {quote.author}</p>}
        </div>
      )}
    </div>
  );
}