import React, { useState, useRef, useLayoutEffect } from "react";
import "./Feature2.css";
import classes from "./NewFeatures.module.css";
import { gsap } from "gsap";

import s1 from "./images/features/symptoms/sym1.svg";
import s2 from "./images/features/symptoms/sym2.svg";
import s3 from "./images/features/symptoms/sym3.svg";
import s4 from "./images/features/symptoms/sym4.svg";
import s5 from "./images/features/symptoms/sym5.svg";
import s6 from "./images/features/symptoms/sym6.svg";
import s11 from "./images/features/symptoms/sym1-2.svg";
import s22 from "./images/features/symptoms/sym2-2.svg";
import s33 from "./images/features/symptoms/sym3-2.svg";
import s44 from "./images/features/symptoms/sym4-2.svg";
import s55 from "./images/features/symptoms/sym5-2.svg";
import s66 from "./images/features/symptoms/sym6-2.svg";
import s7 from "./images/features/symptoms/sym7.svg";
import s8 from "./images/features/symptoms/sym8.svg";

import r1 from "./images/features/reports/r1.svg";
import r2 from "./images/features/reports/r2.svg";
import r3 from "./images/features/reports/r3.svg";
import r4 from "./images/features/reports/r4.svg";

import ai1 from "./images/features/insights/ai1.svg";
import ai2 from "./images/features/insights/ai2.svg";
import ai3 from "./images/features/insights/ai3.svg";
import ai4 from "./images/features/insights/ai4.svg";

import Symptom from "./videos/Symptom-Checker.mp4";
import multiplatform from "./videos/Multiplatform.mp4";
import smartreport from "./videos/Smart-report.mp4";

import { useMediaQuery } from "@material-ui/core";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImagesComp = () => {
  return (
    <>
      <img src={ai4} alt="4" className={classes.img4} id="img22" />
      <img src={ai3} alt="4" className={classes.img4} id="img21" />
      <img src={ai2} alt="4" className={classes.img4} id="img20" />
      <img src={ai1} alt="4" className={classes.img4} id="img19" />
      <img src={r4} alt="4" className={classes.img4} id="img18" />
      <img src={r3} alt="4" className={classes.img4} id="img17" />
      <img src={r2} alt="4" className={classes.img4} id="img16" />
      <img src={r1} alt="4" className={classes.img4} id="img15" />
      <img src={s8} alt="4" className={classes.img4} id="img14" />
      <img src={s7} alt="4" className={classes.img4} id="img13" />
      <img src={s66} alt="4" className={classes.img4} id="img12" />
      <img src={s6} alt="4" className={classes.img4} id="img11" />
      <img src={s55} alt="4" className={classes.img4} id="img10" />
      <img src={s5} alt="4" className={classes.img4} id="img9" />
      <img src={s44} alt="4" className={classes.img4} id="img8" />
      <img src={s4} alt="4" className={classes.img4} id="img7" />
      <img src={s33} alt="4" className={classes.img4} id="img6" />
      <img src={s3} alt="4" className={classes.img4} id="img5" />
      <img src={s22} alt="4" className={classes.img4} id="img4" />
      <img src={s2} alt="3" className={classes.img3} id="img3" />
      <img src={s11} alt="2" className={classes.img2} id="img2" />
      <img src={s1} alt="1" className={classes.img1} id="img1" />
    </>
  );
};

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

function FeatureDesktop() {
  const [Sactive, setSactive] = useState(true);
  const [Aactive, setAactive] = useState(false);
  const [Ractive, setRactive] = useState(false);

  let contentRef = useRef();
  let imagesRef = useRef();
  let img1Ref = useRef();
  let img2Ref = useRef();
  let img3Ref = useRef();
  let img4Ref = useRef();

  const tl = gsap.timeline({
    defaults: { duration: 0 },
    scrollTrigger: {
      trigger: "#feature2",
      //   toggleActions: "restart complete reverse resume",
      pin: true,
      start: "center center",
      scrub: 0,
    },
  });

  //   let duration = 1;

  useLayoutEffect(() => {
    tl.fromTo(
      "#img1",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      "+=1"
    )

      .fromTo(
        "#img2",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )

      .fromTo(
        "#img3",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img4",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img5",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img6",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img7",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img8",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img9",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img10",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img11",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img12",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img13",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img14",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )

      .to(
        "#Sactive",
        // {
        //   duration: 0,
        //   background: "#ffffff",
        //   boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        // },
        { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        "<"
      )
      .to(
        "#Aactive",
        // { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        {
          duration: 0,
          background: "#ffffff",
          boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        },

        "<"
      )

      .fromTo(
        "#img15",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img16",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img17",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img18",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )

      .to(
        "#Aactive",
        // {
        //   duration: 0,
        //   background: "#ffffff",
        //   boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        // },
        { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        "<"
      )
      .to(
        "#Ractive",
        // { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        {
          duration: 0,
          background: "#ffffff",
          boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        },

        "<"
      )
      .to(
        "#Aactive",
        // {
        //   duration: 0,
        //   background: "#ffffff",
        //   boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        // },
        { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        "<"
      )
      .to(
        "#Aactive",
        // {
        //   duration: 0,
        //   background: "#ffffff",
        //   boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        // },
        { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        "<"
      )

      .fromTo(
        "#img19",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .to(
        "#Aactive",
        // {
        //   duration: 0,
        //   background: "#ffffff",
        //   boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
        // },
        { duration: 0, background: "#e4ebeb", boxShadow: "none" },
        "<"
      )
      //   .to(
      //     "#Aactive",
      //     // {
      //     //   duration: 0,
      //     //   background: "#ffffff",
      //     //   boxShadow: " 1px 1px 5px rgba(0, 0, 0, 0.25)",
      //     // },
      //     { duration: 0, background: "#e4ebeb", boxShadow: "none" },
      //     "-=2"
      //   )
      .fromTo(
        "#img20",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )
      .fromTo(
        "#img21",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "+=1"
      )

      .to(
        "#img22",
        {
          duration: 0,
          opacity: 1,
        }
        // "-=0.5"
      )

      .to(
        "#partner",
        {
          opacity: 1,
        }
        // "-=1"
      );

    // tl.to("#Sactive", {
    //   duration: duration,
    //   opacity: 0,
    //     ease: Power1.easeOut,
    // });
  });

  return (
    <>
      <div className="block blockDark feature2" id="feature2">
        <div className="feature2Left">
          <div className={"feature2CardActive"} id="Sactive">
            <div className="feature2CardHeading">Symptom Checker</div>
            <div className="feature2CardDescription">
              Check upto 600 diseases and 1000 symptom on mslate symptom
              checker. Also easily sync data from the symptom checker to the
              Electronic Health Records and effortlessly generate a medical
              report.
            </div>
          </div>
          <video className="featureVideo" src={Symptom} />
          <div className={"feature2Card"} id="Aactive">
            <div className="feature2CardHeading">Actionable Insights</div>
            <div className="feature2CardDescription">
              anage your practice opportunities with weekly reporting and
              intelligent dashboard features. Find new revenue opportunities and
              increase conversion rates of your referred patients.
            </div>
          </div>
          <video className="featureVideo" src={multiplatform} />
          <div className={"feature2Card"} id="Ractive">
            <div className="feature2CardHeading">Smart Reports</div>
            <div className="feature2CardDescription">
              Generate a Multilingual SMART REPORT consistising of precautions,
              prescriptions, labtest and many more with just one click and
              effortlessly share it on WhatsApp, mail and SMS.
            </div>
          </div>
          <video className="featureVideo" src={smartreport} />
        </div>

        <div className="feature2Right">
          <div
            ref={(el) => {
              imagesRef = el;
            }}
            className={classes.images}
            id="images"
          >
            <ImagesComp />
          </div>
        </div>
      </div>
    </>
  );
}

function Feature2New() {
  const mobile = useMediaQuery("(max-width : 768px)");
  return <>{mobile ? <FeatureMobile /> : <FeatureDesktop />}</>;
}

export default Feature2New;
