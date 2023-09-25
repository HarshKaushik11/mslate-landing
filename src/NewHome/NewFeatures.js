import React, { useEffect, useRef } from "react";
import classes from "./NewFeatures.module.css";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import symptom1 from "./images/features/symptoms/symptom1.png";
// import symptom2 from "./images/features/symptoms/symptom2.png";
// import symptom3 from "./images/features/symptoms/symptom3.png";
// import symptom4 from "./images/features/symptoms/symptom4.png";

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

import report1 from "./images/features/reports/report1.png";
import report2 from "./images/features/reports/report2.png";
import report3 from "./images/features/reports/report3.png";
import report4 from "./images/features/reports/report4.png";

import { handleScroll } from "./handlers/handle";

gsap.registerPlugin(ScrollTrigger);

const SymptomFeature = () => {
  const images = [
    {
      src: s1,
      id: "img1",
    },
    {
      src: s11,
      id: "img2",
    },
    {
      src: s2,
      id: "img3",
    },
    {
      src: s22,
      id: "img4",
    },
    {
      src: s3,
      id: "img5",
    },
    {
      src: s33,
      id: "img6",
    },
    {
      src: s4,
      id: "img7",
    },
    {
      src: s44,
      id: "img8",
    },
    {
      src: s5,
      id: "img9",
    },
    {
      src: s55,
      id: "img10",
    },
    {
      src: s6,
      id: "img11",
    },
    {
      src: s66,
      id: "img12",
    },
  ];

  let imagesRef = useRef();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#images",
      pin: true,
      start: "top 0%",
      scrub: 1,
    },
  });

  let duration = 1;

  useEffect(() => {
    tl.to("#img1", {
      duration: duration,
      opacity: 0,
      ease: Power1.easeOut,
    })

      .to("#img2", {
        duration: duration,
        opacity: 0,
      })

      .to("#img3", {
        duration: duration,
        opacity: 0,
      })

      .to("#img4", {
        duration: duration,
        opacity: 0,
      })

      .to(
        "#insights",
        {
          duration: duration,
          opacity: 1,
        },
        "-=1"
      );
  });

  return (
    <div className={classes.feature} id="symptom">
      <div className={classes.featureContent}>
        <div className={classes.featuresHeading}>Symptom Checker</div>
        <div className={classes.featureDescription}>
          Check upto 600 diseases and 1000 symptom on mslate symptom checker.
          Also easily sync data from the symptom checker to the Electronic
          Health Records and effortlessly generate a medical report.
        </div>
      </div>
      <div
        ref={(el) => {
          imagesRef = el;
        }}
        className={classes.images}
        id="images"
      >
        {images.map((image, idx) => (
          <img src={image.src} id={image.id} />
        ))}
      </div>
    </div>
  );
};

// const InsightsFeature = () => {

//   let imagesRef = useRef();

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#images",
//       pin: true,
//       start: "top 0%",
//       scrub: 1,
//     },
//   });

//   let duration = 3;

//   useEffect(() => {
//     console.log(imagesRef);

//     tl.to("#img1", {
//       duration: duration,
//       opacity: 0,
//       ease: Power1.easeOut,
//     })

//       .to("#img2", {
//         duration: duration,
//         opacity: 0,
//       })

//       .to("#img3", {
//         duration: duration,
//         opacity: 0,
//       })

//       .to("#img4", {
//         duration: duration,
//         opacity: 0,
//       })

//       .to(
//         "#report",
//         {
//           duration: duration,
//           opacity: 1,
//         },
//         "-=1"
//       );
//   });

//   return (
//     <div className={classes.insights} id="insights">
//       <div className={classes.featureContent}>
//         <div className={classes.featuresHeading}>Symptom Checker</div>
//         <div className={classes.featureDescription}>
//           Check upto 600 diseases and 1000 symptom on mslate symptom checker.
//           Also easily sync data from the symptom checker to the Electronic
//           Health Records and effortlessly generate a medical report.
//         </div>
//       </div>
//       <div
//         ref={(el) => {
//           imagesRef = el;
//         }}
//         className={classes.images}
//         id="images"
//       >
//         <img
//           ref={(el) => {
//             img4Ref = el;
//           }}
//           src="https://dummyimage.com/1400x600/d99f2b/fff.png&text=4"
//           alt="4"
//           className={classes.img4}
//           id="img4"
//         />
//         <img
//           ref={(el) => {
//             img3Ref = el;
//           }}
//           src="https://dummyimage.com/1400x600/44a10f/fff.png&text=3"
//           alt="3"
//           className={classes.img3}
//           id="img3"
//         />
//         <img
//           ref={(el) => {
//             img2Ref = el;
//           }}
//           src="https://dummyimage.com/1400x600/3c00ff/fff.png&text=2"
//           alt="2"
//           className={classes.img2}
//           id="img2"
//         />
//         <img
//           ref={(el) => {
//             img1Ref = el;
//           }}
//           src="https://dummyimage.com/1400x600/ff4400/fff.png&text=1"
//           alt="1"
//           id="img1"
//           className={classes.img1}
//         />
//       </div>
//     </div>
//   );
// };

// const ReportsFeature = () => {
//   let contentRef = useRef();
//   let imagesRef = useRef();
//   let img1Ref = useRef();
//   let img2Ref = useRef();
//   let img3Ref = useRef();
//   let img4Ref = useRef();

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#images",
//       pin: true,
//       start: "top 0%",
//       scrub: 1,
//     },
//   });

//   let duration = 3;

//   useEffect(() => {
//     console.log(imagesRef);

//     tl.to("#img1", {
//       duration: duration,
//       opacity: 0,
//       ease: Power1.easeOut,
//     })

//       .to("#img2", {
//         duration: duration,
//         opacity: 0,
//       })

//       .to("#img3", {
//         duration: duration,
//         opacity: 0,
//       })

//       .to("#img4", {
//         duration: duration,
//         opacity: 0,
//       })

//       .to(
//         "#content",
//         {
//           duration: duration,
//           opacity: 1,
//         },
//         "-=1"
//       );
//   });

//   return (
//     <div className={classes.report} id="report">
//       <div className={classes.featureContent}>
//         <div className={classes.featuresHeading}>Symptom Checker</div>
//         <div className={classes.featureDescription}>
//           Check upto 600 diseases and 1000 symptom on mslate symptom checker.
//           Also easily sync data from the symptom checker to the Electronic
//           Health Records and effortlessly generate a medical report.
//         </div>
//       </div>
//       <div
//         ref={(el) => {
//           imagesRef = el;
//         }}
//         className={classes.images}
//         id="images"
//       >
//         <img
//           ref={(el) => {
//             img4Ref = el;
//           }}
//           src={report4}
//           alt="4"
//           className={classes.img4}
//           id="img4"
//         />
//         <img
//           ref={(el) => {
//             img3Ref = el;
//           }}
//           src={report3}
//           alt="3"
//           className={classes.img3}
//           id="img3"
//         />
//         <img
//           ref={(el) => {
//             img2Ref = el;
//           }}
//           src={report2}
//           alt="2"
//           className={classes.img2}
//           id="img2"
//         />
//         <img
//           ref={(el) => {
//             img1Ref = el;
//           }}
//           src={report1}
//           alt="1"
//           id="img1"
//           className={classes.img1}
//         />
//       </div>
//     </div>
//   );
// };

export default function NewFeatures() {
  // let contentRef = useRef();
  let imagesRef = useRef();
  // let img1Ref = useRef();
  // let img2Ref = useRef();
  // let img3Ref = useRef();
  // let img4Ref = useRef();

  //   const r1 = gsap.utils.selector(imagesRef);
  //   const r2 = gsap.utils.selector(img1Ref);
  //   const r3 = gsap.utils.selector(img2Ref);
  //   const r4 = gsap.utils.selector(img3Ref);
  //   const r5 = gsap.utils.selector(img4Ref);
  //   const r6 = gsap.utils.selector(contentRef);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#featureSection",
      pin: true,
      start: "top 0%",
      scrub: 1,
    },
  });

  let duration = 3;

  useEffect(() => {
    tl.to("#symptom", {
      duration: duration,
      opacity: 0,
      ease: Power1.easeOut,
    });

    // .to("#img2", {
    //   duration: duration,
    //   opacity: 0,
    // })

    // .to("#img3", {
    //   duration: duration,
    //   opacity: 0,
    // })

    // .to("#img4", {
    //   duration: duration,
    //   opacity: 0,
    // })

    // .to(
    //   "#partner",
    //   {
    //     duration: duration,
    //     opacity: 1,
    //   },
    //   "-=1"
    // );
  });

  return (
    <section
      onScroll={() => handleScroll()}
      className={`${classes.featureSection} ${classes.blockDark}`}
      id="featureSection"
    >
      <SymptomFeature />
      {/* <InsightsFeature /> */}
      {/* <ReportsFeature /> */}
    </section>
  );
}
