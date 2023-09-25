import classes from "./Landing.module.css";
import React from "react";
import logo from "./images/logoCon.jpg";
// import doc from './images/Doctor1.png'
import hero from "./images/hero.jpg";
import googleplay from "./images/google-play.svg";

// import apple from './images/apple.svg'

export default function Landing() {
  return (
    <section className={classes.landing}>
      <div className={classes.navbar}>
        <div className={classes.logoCont}>
          <img src={logo} className={classes.logo} alt="logo" />
          <p className={classes.logoTitle}>Mslate</p>
        </div>
        <div className={classes.navLinks}>
          <a href="/login" className={classes.navBtn}>
            Doctor's Login
          </a>
          {/* <a href="/signup" className={classes.navBtn}>Sign Up</a> */}
        </div>
      </div>
      <div className={classes.landingContent}>
        <div className={classes.left}>
          <div className={classes.heading}>Your personal health assistant</div>
          <div className={classes.subText}>
            Yes you heard it right! Wanna know know more? So, download the app
            now...
          </div>
          <div className={classes.googlePlay}>
            <a
              href="https://play.google.com/store/apps/details?id=com.Mslate.MSlateAi"
              className={classes.button}
            >
              <img src={googleplay} className={classes.gplay} alt="appstore" />
              Download the App
            </a>
          </div>
        </div>
        <div className={classes.right}>
          <img className={classes.hero} src={hero} alt="landing"></img>
        </div>
      </div>
    </section>
  );
}
