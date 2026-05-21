import React, { useState } from 'react';
import '../App.css'; 

const Gift = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="gift" id="gift">
      <h2>و أخيرًا هديتك الإلكترونية 💌</h2>
      <p>دوسي على الصندوق عشان تشوفي هديتك</p>
      
      <div className="gift-box" onClick={toggleMessage}>
        {isOpen ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-solid fa-gift"></i>
        )}
      </div>

      {isOpen && (
        <div className="secret-message glass-inner">
          <p>
            "حبيبتي الغالية، لو كان بإمكاني أن أهديكِ الدنيا لجمعتها بين يديكِ.
            شكراً لأنكِ في حياتي، شكراً لكل ضحكة وكل لحظة أمان بجانبك. أحبكِ
            اليوم، وغداً، وإلى نهاية العمر." 🫶🏻
          </p>
        </div>
      )}
    </section>
  );
};

export default Gift;