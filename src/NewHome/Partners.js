import React from "react";
import classes from "./NewLanding.module.css";
import tcs from "./images/tcs.png";
import digitalimpact from "./images/digital-impact.png";
import startupIndia from "./images/startup-india.png";

export default function Partners() {
  return (
    <div className={`${classes.container} ${classes.partners}`} id="partner">
      <h2 className={classes.partnerHeading}>Our Partners</h2>
      <div className={classes.imageContainer}>
        <img className={classes.partnerImages} src={tcs} alt="" />
        <img className={classes.partnerImages} src={digitalimpact} alt="" />
        <img className={classes.partnerImages} src={startupIndia} alt="" />
      </div>
    </div>
  );
}
