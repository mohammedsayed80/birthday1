import React from 'react'
import { Link } from 'react-router'
import '../App.css'
import img from '../assets/img/images.png'
const Message = () => {
  return (
    <section class="message" id="message">
      <h2>رساله ليكي 💗</h2>
      <span>دوسي عليها عشان تفتح</span>
      <div class="letter">
        <figure id='fig'
          onClick={()=>{
            document.getElementById('fig').classList.add('hide');
            document.getElementById('last').classList.add('show')
          }}
        >
          <img src={img} alt="" />
        </figure>
        <p>
          كل سنه و انتي طيبه يا حبيبتي، انتي مش بس نصفي التاني، انتي كل حياتي.
          بحبك اكتر من اي حاجه في الدنيا، و بتمنى نفضل مع بعض طول العمر. شكرا
          لوجودك في حياتي و لجعلها اجمل بكتير. كل سنه و انتي طيبه يا حبيبتي.
        </p>
      </div>
      <Link to='/gift' className='next-btn' id='last'>شوفي هديتك</Link>
    </section>  )
}

export default Message