import React, { useState } from "react";
import classes from "./NewLanding.module.css";

export default function FAQ() {
  const [faqs, SetFaqs] = useState([
    // {
    //   question:
    //     "If i purchase basic plan, and then switch to premium, will the extra month due to referral be basic or premium?",
    //   answer:
    //     "It depends on when was your referral code used. If used when you were at basic plan, then basic plan month will be added up.",
    //   open: false,
    // },
    {
      question:
        "I logged in using other doctor's referral. Which plan would be added to my account, basic or premium?",
      answer: "It depends on which plan you chose to start your account with.",
      open: false,
    },
    // {
    //   question: "How can using  an EHR benefit my practice",
    //   answer:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //   open: false,
    // },
    {
      question: "What is the price of your EHR system",
      answer: "Pricing starts from 899/- per month.  ",
      open: false,
    },
    {
      question: "How easy is to use mslate EHR software?",
      answer:
        "Our motive is to make the software totally user-friendly. mslate EMR is extremely easy to use. No prior knowledge of computers/software is necessary. To make it easier, our on-ground team guides you through the initial usage and always remains available for any assistance you might need.",
      open: false,
    },
    {
      question: "Can I write the prescription in the regional language?",
      answer:
        "Prescriptions can be written in English and converted to any regional language in just one click before printing and sharing. To make it easier for patients that are comfortable in their own regional languages, mslate supports prescriptions in up to 8 regional languages until now.",
      open: false,
    },
    {
      question: "How do EHR systems improve the quality of care for patients?",
      answer:
        "EHR reduces patient waiting time. They also improve communication between patients and physicians, improve efficiency and promote better satisfaction levels among patients. We also provide Symptom-checker to patients so that Doctors could receive complete medical history from the Symptom Checker.",
      open: false,
    },
    {
      question: "What is the electronic health records definition?",
      answer:
        "An electronic health record (EHR) is a digital version of a patient's paper chart. EHRs are real-time, patient-centered records that make information available instantly and securely to authorized users",
      open: false,
    },
  ]);
  //   const [active, setActive] = useState(false);

  const toggleFaq = (index) => {
    SetFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div id="faq" className={`${classes.container} ${classes.faqSection}`}>
      <h2 className={classes.faqHeader}>FAQ</h2>
      <div className={classes.faqs}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={
              faq.open ? `${classes.faq} ${classes.faqOpen}` : `${classes.faq}`
            }
            onClick={() => toggleFaq(i)}
          >
            <div className={classes.faqQuestion}>{faq.question}</div>
            <div className={classes.faqAnswer}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
