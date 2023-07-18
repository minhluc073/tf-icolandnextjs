import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Comingsoon(props) {
  const [countdownDate] = useState(new Date("9/30/2023").getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const [dataTitle] = useState({
    title: "Hang on! We are under maintenance",
    desc: "It will not take a long time till we get the error fiked. We will live again in,",
  });

  return (
    <section className="comingsoon">
      <div className="bg-coming">
        <Image
          src={require("../assets/images/background/line-coming.png")}
          alt="ICOLand"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="main-comingsoon center">
            <div className="logo">
              <Link href="/">
                <Image
                  src={require("../assets/images/logo/logo-main.png")}
                  alt="ICOLand"
                />
              </Link>
            </div>
            <h3 className="heading">{dataTitle.title}</h3>
            <p className="fs-15">{dataTitle.desc}</p>
            <div className="js-countdown">
              <div className="countdown__timer">
                <div className="countdown__item">{state.days || "0"}</div>
                <div className="countdown__item countdownhours">
                  {state.hours || "00"}
                </div>
                <div className="countdown__item countdownminutes">
                  {state.minutes || "00"}
                </div>
                <div className="countdown__item countdownseconds">
                  {state.seconds || "00"}
                </div>
              </div>
            </div>
            <form action="#" id="subscribe-form">
              <input
                type="email"
                placeholder="Enter your mail"
                required=""
                id="subscribe-email"
              />
              <button
                className="btn-action s2"
                type="submit"
                id="subscribe-button"
              >
                <span className="effect">Notify Me</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comingsoon;
