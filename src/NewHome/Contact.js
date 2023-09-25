import React from "react";
import NavBar from "./NavBar";
import NewFooter from "./NewFooter";
import classes from "./NewLanding.module.css";
import mail from "./images/mail.svg";

function Contact() {
  return (
    <>
      <NavBar />
      <section
        className={`${classes.container} ${classes.divCenter} ${classes.contactSection}`}
      >
        <div className={classes.contactHeader}>
          <h2>Contact us</h2>
          <p>Contact us for booking a demo or help</p>
        </div>
        <p>
          <img src={mail} alt="" />
          contact@mslate.ai
        </p>
        <form classname={classes.contactForm} action="mailto:contact@mslate.ai">
          <label>
            Name
            <input
              classname={classes.contactFormInput}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Phone
            <input
              classname={classes.contactFormInput}
              type="number"
              name="phone"
              placeholder="Enter your phone"
              required
            />
          </label>
          <label>
            Email
            <input
              classname={classes.contactFormInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Subject
            <select>
              <option value="demo">Demo</option>
              <option value="enquiry">Enquiry</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <NewFooter />
    </>
  );
}

export default Contact;
