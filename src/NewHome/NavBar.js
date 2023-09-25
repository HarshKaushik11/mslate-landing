import classes from "./NewLanding.module.css";
import React, { useState, useEffect } from "react";
import logo from "./images/logo-new.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [y, setY] = useState(window.scrollY);
  const [active, setActive] = useState(true);

  const handleNavigation = (e) => {
    // const window = e.currentTarget;
    if (y > 770) {
      setActive(false);
    } else {
      setActive(true);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleNavigation(e);
    });

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
    // eslint-disable-next-line
  }, [y]);

  return (
    <div
      className={`${classes.blockDark} ${classes.blockWhite} ${classes.navContainer}`}
    >
      <nav className={`${classes.nav} ${classes.container}`}>
        <a href="/">
          <img className={classes.navlogo} src={logo} alt="" />
        </a>
        {/* <ul className={`${classes.navList}`}>
          {active ? (
            <li className={classes.navItem}>
              <Link id="navToggle" className={classes.contactbtn} to="/login">
                Login
              </Link>
            </li>
          ) : (
            <li className={classes.navItem}>
              <Link id="navToggle" className={classes.contactbtn} to="/contact">
                Contact Us
              </Link>
            </li>
          )}

          <li className={classes.navItem}>
            <div className={`${classes.btnSecondary}`}>
              <Link className={classes.signupbtn} to="/signup">
                Signup
              </Link>
            </div>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}
