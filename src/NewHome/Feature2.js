import React, { useState } from "react";
import classes from "./NewFeatures.module.css";
import style from "./NewLanding.module.css";

import "./Feature2.css";

import Symptom from "./videos/Symptom-Checker.mp4";
import multiplatform from "./videos/Multiplatform.mp4";
import smartreport from "./videos/Smart-report.mp4";

import { useMediaQuery } from "@material-ui/core";

const FeatureMobile = () => {
  return (
    <div className="block blockDark feature2" id="feature2Mobile">
      <div className="feature2Left">
        <div className={"feature2Card"} id="Sactive">
          <div className="feature2CardHeading">Symptom Checker</div>
          <div className="feature2CardDescription">
            Check upto 600 diseases and 1000 symptom on mslate symptom checker.
            Also easily sync data from the symptom checker to the Electronic
            Health Records and effortlessly generate a medical report.
          </div>
        </div>
        {/* <video className="featureVideo" src={Symptom} /> */}
        <video autoPlay muted loop className="featureVideo">
          <source src={Symptom} type="video/mp4" />
        </video>
        <div className={"feature2Card"} id="Aactive">
          <div className="feature2CardHeading">Actionable Insights</div>
          <div className="feature2CardDescription">
            anage your practice opportunities with weekly reporting and
            intelligent dashboard features. Find new revenue opportunities and
            increase conversion rates of your referred patients.
          </div>
        </div>
        {/* <video className="featureVideo" src={multiplatform} /> */}
        <video autoPlay muted loop className="featureVideo">
          <source src={multiplatform} type="video/mp4" />
        </video>
        <div className={"feature2Card"} id="Ractive">
          <div className="feature2CardHeading">Smart Reports</div>
          <div className="feature2CardDescription">
            Generate a Multilingual SMART REPORT consistising of precautions,
            prescriptions, labtest and many more with just one click and
            effortlessly share it on WhatsApp, mail and SMS.
          </div>
        </div>
        {/* <video className="featureVideo" src={smartreport} /> */}
        <video autoPlay muted loop className="featureVideo">
          <source src={smartreport} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

const FeatureDesktop = () => {
  const [Sactive, setSactive] = useState(true);
  const [Aactive, setAactive] = useState(false);
  const [Ractive, setRactive] = useState(false);
  return (
    <div className={`${style.block} ${style.blockDark} ${classes.feature2}`}>
      <div className={classes.feature2Left}>
        <div
          className={
            Sactive ? classes.feature2CardActive : classes.feature2Card
          }
          onClick={() => {
            setAactive(false);
            setSactive(true);
            setRactive(false);
          }}
        >
          <div className={classes.feature2CardHeading}>Symptom Checker</div>
          <div className={classes.feature2CardDescription}>
            Check upto 600 diseases and 1000 symptom on mslate symptom checker.
            Also easily sync data from the symptom checker to the Electronic
            Health Records and effortlessly generate a medical report.
          </div>
        </div>
        <div
          className={
            Aactive ? classes.feature2CardActive : classes.feature2Card
          }
          onClick={() => {
            setAactive(true);
            setSactive(false);
            setRactive(false);
          }}
        >
          <div className={classes.feature2CardHeading}>Actionable Insights</div>
          <div className={classes.feature2CardDescription}>
            anage your practice opportunities with weekly reporting and
            intelligent dashboard features. Find new revenue opportunities and
            increase conversion rates of your referred patients.
          </div>
        </div>
        <div
          className={
            Ractive ? classes.feature2CardActive : classes.feature2Card
          }
          onClick={() => {
            setAactive(false);
            setSactive(false);
            setRactive(true);
          }}
        >
          <div className={classes.feature2CardHeading}>Smart Reports</div>
          <div className={classes.feature2CardDescription}>
            Generate a Multilingual SMART REPORT consistising of precautions,
            prescriptions, labtest and many more with just one click and
            effortlessly share it on WhatsApp, mail and SMS.
          </div>
        </div>
      </div>
      <div className={classes.feature2Right}>
        {/* <div
    ref={(el) => {
      imagesRef = el;
    }}
    className={classes.images}
    id="images"
  >
    <ImagesComp />
  </div> */}
        <video
          autoPlay
          muted
          loop
          className={classes.featureVideo}
          src={Sactive ? Symptom : Aactive ? multiplatform : smartreport}
        />
      </div>
    </div>
  );
};

function Feature2() {
  const mobile = useMediaQuery("(max-width : 768px)");
  return <>{!mobile ? <FeatureDesktop /> : <FeatureMobile />}</>;
}

export default Feature2;
