import React, { useState, useEffect } from 'react';
import '../App.css';

const Bg = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartSymbols = ['❤️', '💖', '✨', '🌸', '💗', '🫶🏻'];
    const generatedHearts = [];

    for (let i = 0; i < 30; i++) {
      generatedHearts.push({
        id: i,
        text: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
        style: {
          left: Math.random() * 100 + 'vw',
          top: Math.random() * -20 + 'px',
          fontSize: Math.random() * 15 + 15 + 'px',
          animationDuration: Math.random() * 5 + 5 + 's',
          animationDelay: Math.random() * 5 + 's',
          position: 'absolute' // تأكد إن الـ position موجود هنا أو في الـ CSS
        }
      });
    }

    setHearts(generatedHearts);
  }, []); // المصفوفة الفاضية دي بتضمن إن الكود يشتغل مرة واحدة بس أول ما المكون يظهر

  return (
    <div id="hearts-container">
      {hearts.map((heart) => (
        <div key={heart.id} className="heart-fall" style={heart.style}>
          {heart.text}
        </div>
      ))}
    </div>
  );
};

export default Bg;