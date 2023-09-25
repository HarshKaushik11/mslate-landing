import React, { useEffect, useState } from "react";
import classes from "./NewLanding.module.css";

import logo from "./images/logo.svg";
import iso from "./images/iso.svg";
import hippa from "./images/hippa.svg";
import linkedin from "./images/linkedin.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import WhatsappModal from "./Modal/WhatsappModal";

export default function NewFooter() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer
      className={`${classes.block} ${classes.footer} ${classes.blockWhite} ${classes.footer}`}
    >
      <section
        className={`${classes.container} ${classes.grid} ${classes.footergrid1}`}
      >
        <div
          classname={classes.footerBrand}
          style={{
            textAlign: "center",
            alignSelf: "center",
            marginBottom: "5rem",
          }}
        >
          <img className={classes.footerLogo} src={logo} alt="" />
          <p
            classname={classes.footerContact}
            style={{
              fontSize: "1.8rem",
              letterSpacing: "0.02em",
              fontWeight: "400",
              color: "#083038",
            }}
          >
            contact@mslate.ai
          </p>
        </div>
        <div className={`${classes.grid1Links} ${classes.companyLinks}`}>
          <h3 className={classes.footerHeading}>Company</h3>
          <ul className={classes.list} style={{ paddingLeft: 0 }}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/privacy">Privacy & Policy</a>
            </li>
          </ul>
        </div>
        <div className={classes.grid1Links}>
          <h3 className={classes.footerHeading}>Contact</h3>
          <ul className={classes.list} style={{ paddingLeft: 0 }}>
            <li>
              <a href="#faq">Help/FAQ</a>
            </li>
            <li>
              <a href="/contact">Book a Demo</a>
            </li>
            <li onClick={() => setShowModal(true)}>
              <span className={classes.symptomCheckerSpan}>
                Symptom Checker @Whatsapp
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`${classes.container} ${classes.grid} ${classes.footergrid2}`}
      >
        <div className={classes.certification}>
          <ul className={classes.listFlex}>
            <li className={classes.iso}>
              <img src={iso} alt="" />
              <p>ISO Certification</p>
            </li>
            <li className={classes.hippa}>
              <img src={hippa} alt="" />
              <p>HIPPA COMPLIANT</p>
            </li>
          </ul>
        </div>
        <div className={classes.middle}>
          <p>Made with ❤️in India</p>
        </div>
        <div className={classes.social}>
          <h3 className={classes.footerHeading}>Follow us on</h3>
          <ul className={classes.listFlex}>
            <li>
              <a href="https://www.linkedin.com/company/mslate/">
                <img src={linkedin} alt="" />
              </a>
              <p>Linkedin</p>
            </li>
            <li>
              <a href="https://www.facebook.com/Mslate-Health-109140688130447">
                <img src={facebook} alt="" />
              </a>
              <p>Facebook</p>
            </li>
            <li>
              <a href="https://www.instagram.com/mslatehealth/">
                <img src={instagram} alt="" />
              </a>
              <p>Instagram</p>
            </li>
            <li>
              <a href="https://twitter.com/mslatehealth">
                <img src={twitter} alt="" />
              </a>
              <p>Twitter</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={classes.copyright}>
        <p>Mslate HealthTech Pvt Ltd COPYRIGHT 2022 -</p>
        <p>
          <a href="/terms-of-use">TERMS & CONDITIONS</a>{" "}
          <a href="/privacy">PRIVACY POLICY</a>
        </p>
      </section>
      {/* <WhatsappModal showModal={showModal} setShowModal={setShowModal} /> */}
    </footer>
  );
}
