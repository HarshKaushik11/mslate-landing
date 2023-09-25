// import React, { useEffect, useState } from "react";
// import classes from "./Whatsapp.module.css";
// import whatsappIcon from "../images/WhatsApp.png";
// import cancelIcon from "../images/cancel.png";
// import Snackbar from "@material-ui/core/Snackbar";
// import Alert from "../../common/components/Alert";
// import { axiosAuthorizedInstance } from "../../Utilities/customAxios/customAxios";
// import axios from "axios";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import CancelIcon from "@material-ui/icons/Cancel";

// function WhatsappModal({ showModal, setShowModal }) {
//   const [show, setShow] = useState(showModal);
//   const [mobile, setMobile] = useState();
//   const [mobileError, setMobileError] = useState();
//   const [successSnack, setSuccessSnack] = useState(false);
//   const [errorSnack, setErrorSnack] = useState(false);
//   useEffect(() => {
//     setShow(showModal);
//   }, [showModal]);

//   const hadleContinue = () => {
//     const phoneMatch = /^[6-9]{1}[0-9]{9}$/.test(mobile);
//     if (!phoneMatch) {
//       setMobileError(true);
//       setMobile("");
//       return;
//     }

//     let phone = "+91" + mobile;
//     const requestOptions = {
//       method: "post",
//       url: "/api/communications/whatsapp/send-consent/",
//       data: { phone },
//     };
//     axios(requestOptions)
//       .then((res) => {
//         setSuccessSnack(true);
//         setShowModal(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setErrorSnack(true);
//       });
//   };

//   const closeSuccessSnack = () => {
//     setSuccessSnack(false);
//   };
//   const closeErrorSnack = () => {
//     setErrorSnack(false);
//   };

//   return (
//     <div
//       className={classes.modalBackdrop}
//       style={show ? { display: "block" } : { display: "none" }}
//     >
//       <div className={classes.modalBody}>
//         <div className={classes.topSection}>
//           {/* <ion-icon
//             onClick={() => setShowModal(false)}
//             name="close-circle-outline"
//           ></ion-icon> */}
//           {/* <img className={classes.wtsappicon} src={whatsappIcon} alt="" /> */}
//           {/* <img
//             onClick={() => setShowModal(false)}
//             className={classes.cancelicon}
//             src={cancelIcon}
//             alt=""
//           /> */}
//           <CancelIcon
//             onClick={() => setShowModal(false)}
//             style={{ width: "2em", height: "2em", cursor: "pointer" }}
//           />
//         </div>
//         <div className={classes.description}>
//           <div>
//             <img className={classes.wtsappicon} src={whatsappIcon} alt="" />
//           </div>
//           Take a symptom check on WhatsApp
//         </div>
//         <div className={classes.inputDiv}>
//           {/* <p className={classes.inputLabel}> Enter your Number</p> */}
//           <input
//             className={classes.inputBox}
//             placeholder="Enter Your Mobile Number"
//             value={mobile}
//             onChange={(e) => {
//               setMobileError(false);
//               setMobile(e.target.value);
//             }}
//             maxLength="10"
//           ></input>
//           <div className={classes.iconContainer} onClick={hadleContinue}>
//             <ArrowForwardIosIcon />
//           </div>
//         </div>
//         <p
//           className={mobileError ? classes.textError : classes.textErrorHidden}
//         >
//           Enter a valid Mobile Number
//         </p>
//       </div>
//       <Snackbar
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         open={successSnack}
//         autoHideDuration={3000}
//         onClose={closeSuccessSnack}
//       >
//         <Alert onClose={closeSuccessSnack} severity="success">
//           Success!
//         </Alert>
//       </Snackbar>
//       <Snackbar
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         open={errorSnack}
//         autoHideDuration={3000}
//         onClose={closeErrorSnack}
//       >
//         <Alert onClose={closeErrorSnack} severity="error">
//           Some error Occured!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

// export default WhatsappModal;
