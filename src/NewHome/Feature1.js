import React from "react";
import classes from "./NewFeatures.module.css";
import style from "./NewLanding.module.css";
import doctor from "./images/features/doctorCard.svg";
import patient from "./images/features/patientCard.svg";

function Feature1() {
  return (
    <div className={`${classes.feature1} ${style.container}`}>
      <div className={classes.topCardSection}>
        <div className={classes.cardBig}>
          <div className={classes.cardBigContent}>
            <div className={classes.cardBigHeading}>I’m a Patient</div>
            <div className={classes.cardBigDescription}>
              <div>
                <span className={classes.cardBigDescriptionBold}>
                  Check Symptoms
                </span>
                right from your home
              </div>
              <div>
                <span className={classes.cardBigDescriptionBold}>
                  Get Smart Reports
                </span>
                anytime to download and view
              </div>
            </div>
          </div>
          <div className={classes.feature1ImageContainer}>
            <img className={classes.feature1image} src={patient} alt="" />
          </div>
        </div>
        <div className={classes.cardBig}>
          <div className={classes.cardBigContent}>
            <div className={classes.cardBigHeading}>I’m a Doctor</div>
            <div className={classes.cardBigDescription}>
              <span className={classes.cardBigDescriptionBold}>Insights</span>{" "}
              to revenue and patients
              <div className={classes.cardBigDescription}>
                <span className={classes.cardBigDescriptionBold}>
                  Smart EHR
                </span>
                which autofills th
              </div>
              <div className={classes.cardBigDescription}>
                <span className={classes.cardBigDescriptionBold}>Improve</span>{" "}
                patient retention
              </div>
            </div>
          </div>
          <div className={classes.feature1ImageContainer}>
            <img className={classes.feature1image} src={doctor} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.heading}>Simple, yet powerful features</div>
      <div className={classes.bottomCardSection}>
        <div
          style={{ borderBottom: "4px solid #EBBA9B" }}
          className={classes.cardSmall}
        >
          <div className={classes.cardSmallHeading}>Send</div>
          <div className={classes.cardSmallDescription}>
            Viewable by anyone within seconds
          </div>
        </div>
        <div
          style={{ borderBottom: "4px solid #9FCAA1" }}
          className={classes.cardSmall}
        >
          <div className={classes.cardSmallHeading}>Organise</div>
          <div className={classes.cardSmallDescription}>
            Manage just like your email inbox
          </div>
        </div>
        <div
          style={{ borderBottom: "4px solid #F2C893" }}
          className={classes.cardSmall}
        >
          <div className={classes.cardSmallHeading}>Track</div>
          <div className={classes.cardSmallDescription}>
            See when it's viewed and more
          </div>
        </div>
        <div
          style={{ borderBottom: "4px solid #B4B3E0" }}
          className={classes.cardSmall}
        >
          <div className={classes.cardSmallHeading}>Security</div>
          <div className={classes.cardSmallDescription}>
            HIPAA compliant & mitigates liability
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
