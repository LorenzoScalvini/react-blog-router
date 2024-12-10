import React from "react";
import style from "./Hero.module.css";
import heroImage from "../../assets/images/background.jpg";

export default function Hero() {
  return (
    <div className={style.container}>
      <img src={heroImage} alt="#" className={style.image} />
      <div className={style.textContainer}>
        <h1 className={style.title}>Studio Ghibli</h1>
        <p className={style.subtitle}>All the movies in one place!</p>
        <div className={style.buttons}>
          <button className={style.learnMore}>Learn more</button>
          <button className={style.buy}>Start watching</button>
        </div>
      </div>
    </div>
  );
}
