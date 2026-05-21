import React from "react";
import img from '../assets/img/Picsart_26-05-21_14-09-16-202.jpg'
import { Link } from "react-router";
import Date from "./Time";
const Home = () => {
  return (
    <section class="head active">
      <h1>كل سنه و أنتِ طيبه يا أغلي حد في حياتي💗</h1>
      <figure>
        <img src={img} alt="" />
      </figure>
      <Link to='/date' className="next-btn">اللي بعده</Link>
    </section>
  );
};

export default Home;
