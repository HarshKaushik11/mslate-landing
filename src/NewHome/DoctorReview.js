import React, { useState } from "react";
import classes from "./DoctorReview.module.css";
// import {Avatar} from '@material-ui/core'
// import quote from './images/quote.png'
import map from "./images/map.svg";
import faces from "./images/faces.svg";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useMediaQuery } from "@material-ui/core";

const Card = ({ user, role, review, ...props }) => {
  return (
    <div className={props.class} id="testimonial">
      <div className={classes.textBox}>
        <div className={classes.review}>{review}</div>
      </div>
      <div className={classes.profile}>
        <div className={classes.deets}>
          <div className={classes.name}>{user}</div>
        </div>
      </div>
      <div className={classes.buttonsDiv}>
        <div className={classes.back}>
          <ArrowBackRoundedIcon
            onClick={props.handlePrev}
            className={classes.backBtn}
          ></ArrowBackRoundedIcon>
        </div>
        <div className={classes.forward}>
          <ArrowForwardRoundedIcon
            onClick={props.handleNext}
            className={classes.forwardBtn}
          ></ArrowForwardRoundedIcon>
        </div>
      </div>
    </div>
  );
};

export default function DoctorReview() {
  /*eslint-disable-next-line*/
  const [state, setState] = useState(data);
  const [cid1, setCID1] = useState(0);
  const [cid2, setCID2] = useState(1);
  const [testimonial, setTestimonial] = useState(data[0]);

  const handleNext = () => {
    setCID1((cid1 + 1) % data.length);
    setCID2((cid2 + 1) % data.length);
    setTestimonial(state[(cid1 + 1) % data.length]);
  };

  const handlePrev = () => {
    if (cid1 === 0) {
      setCID1(data.length - 2);
      setCID2(data.length - 1);
      setTestimonial(state[data.length - 1]);
    } else {
      setCID1(cid1 - 1);
      setCID2(cid2 - 1);
      setTestimonial(state[cid1 - 1]);
    }
  };

  const mobile = useMediaQuery("(max-width : 600px)");
  if (mobile) {
    return (
      <div className={classes.containerMobile}>
        <div className={classes.topTextMobile}>
          <div className={classes.title}>
            Why our users do not stop praising us
          </div>
          <div className={classes.subTitle}>
            Hear from our wide range of users who are absolutely thrilled with
            out work.
          </div>
        </div>
        <div className={classes.map}>
          <img src={map} alt="map" className={classes.mapImg} />
        </div>

        <div className={classes.cardsMobile}>
          <TransitionGroup component="div">
            <CSSTransition
              key={cid1}
              timeout={300}
              mountOnEnter
              unmountOnExit
              classNames={{
                enterActive: classes.MyClassEnterActive,
                enterDone: classes.MyClassEnter,
                exitActive: classes.MyClassExit,
                exitDone: classes.MyClassExitActive,
              }}
            >
              <Card
                key={cid1}
                class={classes.card1}
                id={cid1}
                activeId={cid1}
                secondId={cid2}
                user={testimonial.user}
                role={testimonial.role}
                review={testimonial.review}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />
            </CSSTransition>
          </TransitionGroup>
          <div className={classes.cd}>
            <Card
              key={cid1}
              id={cid1}
              class={classes.card2}
              activeId={cid1}
              secondId={cid2}
              user={testimonial.user}
              role={testimonial.role}
              review={testimonial.review}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className={classes.container}>
      <div className={classes.containerDiv}>
        <div className={classes.map}>
          <img className={classes.mapImg} src={map} alt="map" />
        </div>
        <div className={classes.faces}>
          <img className={classes.faceImg} src={faces} alt="faces" />
        </div>
        <div className={classes.topText}>
          <div className={classes.title}>
            Why our users do not stop praising us
          </div>
          <div className={classes.subTitle}>
            Hear from our wide range of users who are absolutely thrilled with
            out work.
          </div>
        </div>
        <div className={classes.cards}>
          <TransitionGroup component="div">
            <CSSTransition
              key={cid1}
              timeout={300}
              mountOnEnter
              unmountOnExit
              classNames={{
                enterActive: classes.MyClassEnterActive,
                enterDone: classes.MyClassEnter,
                exitActive: classes.MyClassExit,
                exitDone: classes.MyClassExitActive,
              }}
            >
              <Card
                key={cid1}
                class={classes.card1}
                id={cid1}
                activeId={cid1}
                secondId={cid2}
                user={testimonial.user}
                role={testimonial.role}
                review={testimonial.review}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />
            </CSSTransition>
          </TransitionGroup>
          <div className={classes.cd}>
            <Card
              key={cid1}
              id={cid1}
              class={classes.card2}
              activeId={cid1}
              secondId={cid2}
              user={testimonial.user}
              role={testimonial.role}
              review={testimonial.review}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    user: "Kushal Sharma",
    role: "5 stars",
    review: "Very Helpful Thanks.",
  },
  {
    user: "Nitin Barade",
    role: "5 stars",
    review: "Nice app",
  },
  {
    user: "Shambhavi Jain",
    role: "5 stars",
    review: "Good Job",
  },
  {
    user: "Sakshi Tyagi",
    role: "5 stars",
    review: "Amazing App",
  },
];
