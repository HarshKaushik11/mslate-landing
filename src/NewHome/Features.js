import React from "react";
import classes from "./NewLanding.module.css";

import Symptom from "./videos/Symptom-Checker.mp4";
import ehr from "./videos/EHR.mp4";
import multiplatform from "./videos/Multiplatform.mp4";
import smartreport from "./videos/Smart-report.mp4";
import apple from "./images/apple-icon.svg";
import googleplay from "./images/googleplay-icon.svg";
import { handleDownload, handleScroll } from "./handlers/handle";

export default function Features() {
  return (
    <section
      onScroll={() => handleScroll()}
      className={`${classes.featureSection}`}
    >
      <header className={classes.blockHeader}>
        <h1 className={`${classes.blockHeading} ${classes.featureHeading}`}>
          Simple, yet <br />
          powerful features
        </h1>
      </header>
      <article
        className={`${classes.grid} ${classes.grid1x2} ${classes.feature}`}
      >
        <div className={`${classes.featureContent}`}>
          <div>
            <h2>Symptom checker</h2>
            <p className={classes.featureText}>
              Check upto 600 diseases and 1000 symptom on mslate symptom
              checker. Also easily sync data from the symptom checker to the
              Electronic Health Records and effortlessly generate a medical
              report.
            </p>
          </div>
        </div>
        <div className={`${classes.videoContainer} ${classes.symptomVideo}`}>
          <video className={classes.featureVideo} autoPlay loop muted>
            <source src={Symptom} type="video/mp4" />
          </video>
        </div>
      </article>
      <article
        className={`${classes.grid} ${classes.grid1x2} ${classes.feature}`}
      >
        <div className={`${classes.featureContent}`}>
          <div>
            <h2>Effortless EHR</h2>
            <p className={classes.featureText}>
              One can always rely on our RECOMMENDATIONS. Enjoy the effortless
              EHR by typing minimal and saving time in return.
            </p>
          </div>
        </div>
        <div className={`${classes.videoContainer} ${classes.ehrVideo}`}>
          <video autoPlay muted loop className={classes.featureVideo}>
            <source src={ehr} type="video/mp4" />
          </video>
        </div>
      </article>
      <article
        className={`${classes.grid} ${classes.grid1x2} ${classes.feature}`}
      >
        <div className={`${classes.featureContent}`}>
          <div>
            <h2>Smart Report</h2>
            <p className={classes.featureText}>
              Generate a Multilingual SMART REPORT consistising of precautions,
              prescriptions, labtest and many more with just one click and
              effortlessly share it on WhatsApp, mail and SMS.
            </p>
          </div>
        </div>
        <div className={`${classes.videoContainer} ${classes.reportVideo}`}>
          <video autoPlay muted loop className={classes.featureVideo}>
            <source src={smartreport} type="video/mp4" />
          </video>
        </div>
      </article>
      <article
        className={`${classes.grid} ${classes.grid1x2} ${classes.feature}`}
      >
        <div className={`${classes.featureContent} `}>
          <div>
            <h2>Multiplatform Support</h2>
            <p className={classes.featureText}>
              Use your mslate application on any smart devices of iOS, MAC
              Android, or Windows with minimal storage space and 0 buffers.
              Download it quickly, cause we hate to make you wait.
            </p>

            <div className={classes.platform}>
              <div
                onClick={() => handleDownload()}
                className={classes.btnSecondary}
              >
                Download App
              </div>
              <img src={apple} alt="" />
              <img src={googleplay} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`${classes.videoContainer} ${classes.multiplatformVideo}`}
        >
          <video autoPlay muted loop className={`${classes.featureVideo}`}>
            <source src={multiplatform} type="video/mp4" />
          </video>
        </div>
      </article>
    </section>
  );
}
