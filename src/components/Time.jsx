import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../App.css'
import '../main.js'
const Time = () => {
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  useEffect(() => {
    function updateTime() {
    const startDate = new Date('2026-05-18');
    const time=new Date()
    const timeDifference = Math.abs(time - startDate);
    if(timeDifference < 0) return
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    setTimeLeft({days, hours, minutes, seconds});
  }
  updateTime();
  const timer = setInterval(updateTime, 1000);
  return () => clearInterval(timer);
  }, []);
  return (
    <section class="date" id="date">
      <div class="dateWeMet">
        <h2>بقالنا مع بعض</h2>
        <p id="count">
          <span>{timeLeft.days} يوم</span>
          <span>{timeLeft.hours} ساعة</span>
          <span>{timeLeft.minutes} دقيقة</span>
          <span>{timeLeft.seconds} ثانية</span>
        </p>
      </div>
      <Link to='/memories' className='next-btn'>اللي بعده</Link>
    </section>  )
}

export default Time