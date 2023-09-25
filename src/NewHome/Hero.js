import React from "react";
import classes from "./NewLanding.module.css";
import clock from "./images/clock.svg";
import health from "./images/health-insurance.svg";
import chart from "./images/line-chart.svg";
import patient from "./images/patient.svg";
import patients from "./images/patients.svg";
import hero from "./images/hero-new.svg";
import { handleDownload } from "./handlers/handle";

export default function Hero() {
  return (
    <section
      className={`${classes.block} ${classes.blockDark} ${classes.heroSection}`}
    >
      <div
        className={`${classes.container} ${classes.grid} ${classes.grid1x2}`}
      >
        <div className={classes.heroContent}>
          <h2 className={`${classes.blockHeading} ${classes.heroHeading}`}>
            Transforming <br /> Health-Care services
          </h2>
          <div className={classes.heroDescription}>
            <p className={classes.heroTagline}>
              A must have EHR software only for YOUR clinic! <br />
              Your search for the BEST EHR ends HERE!
            </p>
            <div onClick={() => handleDownload()} className={classes.btn}>
              <div className={classes.btnPrimary}>Download</div>
            </div>
          </div>
        </div>
        <div className={`${classes.heroImage} ${classes.divCenter}`}>
          <div className={`${classes.ellipse1} ${classes.divCenter}`}>
            <div
              className={`${classes.iconDescription} ${classes.healthdesc} ${classes.divCenter}`}
            >
              NDHM Supported
            </div>
            <div
              className={`${classes.iconDescription} ${classes.clockdesc} ${classes.divCenter}`}
            >
              Swift completion
            </div>
            <div
              className={`${classes.iconDescription} ${classes.patientsdesc} ${classes.divCenter}`}
            >
              Multiply patients
            </div>
            <div
              className={`${classes.iconDescription} ${classes.chartdesc} ${classes.divCenter}`}
            >
              Create efficiency in practises
            </div>
            <div
              className={`${classes.iconDescription} ${classes.patientdesc} ${classes.divCenter}`}
            >
              Retain patients
            </div>
            <span className={`${classes.iconContainer} ${classes.iconClock}`}>
              <img src={clock} className={`${classes.iconImage}`} alt="" />
            </span>
            <span className={`${classes.iconContainer} ${classes.iconHealth}`}>
              <img src={health} className={`${classes.iconImage}`} alt="" />
            </span>
            <span className={`${classes.iconContainer} ${classes.iconChart}`}>
              <img src={chart} className={`${classes.iconImage}`} alt="" />
            </span>
            <span className={`${classes.iconContainer} ${classes.iconPatient}`}>
              <img src={patient} className={`${classes.iconImage}`} alt="" />
            </span>
            <span
              className={`${classes.iconContainer} ${classes.iconPatients}`}
            >
              <img src={patients} className={`${classes.iconImage}`} alt="" />
            </span>
            <div className={`${classes.ellipse2} ${classes.divCenter}`}>
              <img className={classes.hero} src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
