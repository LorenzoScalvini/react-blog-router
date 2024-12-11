import React from "react";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>The Legend Of Zelda</h1>
        <p className={style.subtitle}>All link stories!</p>
        <div className={style.buttons}>
          <button className={style.learnMore}>Learn more</button>
          <button className={style.buy}>Buy games</button>
        </div>
      </div>
    </div>
  );
}
