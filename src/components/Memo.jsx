import React, { useState } from 'react'
import { Link } from 'react-router'
import '../App.css'
import img from '../assets/img/Picsart_26-05-21_14-10-07-058.jpg'
const Memo = () => {
    const imgs=[img,img,img,img,img,img];
    const [previewImg, setPreviewImg] = useState('');
    const preview = document.getElementById('img-preview');
  return (
    <section class="memories" id="memo">
      <div class="img-preview" id="img-preview">
        <button type="button" id="close" onClick={()=>{ preview.classList.remove('show')}}>x</button>
        <figure>
            <img id="img-show" src={previewImg} alt="" />
        </figure>
      </div>
      <h2>ذكرياتنا مع بعض 💗</h2>
      <div class="imgs">
        {imgs.map((img, index) => (
          <figure key={index} onClick={()=>{
            setPreviewImg(img);
            preview.classList.add('show');
          }}>
            <img src={img} alt=""/>
          </figure>
        ))}
      </div>
      <Link to='/message' className='next-btn'>اللي بعده</Link>
    </section>  )
}

export default Memo