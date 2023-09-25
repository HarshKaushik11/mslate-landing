// import { useState, useRef } from "react";
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});

export function handleDownload() {
  if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=doctor.mslate.health";
  } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
    window.location.href = "https://apps.apple.com/app/";
  } else {
    // window.location.href =
    //   "https://play.google.com/store/apps/details?id=com.Mslate.MSlateAi";
    // console.log(navigator.userAgent.toLowerCase().indexOf("windows"));
    // console.log(navigator.userAgent.toLowerCase().indexOf("chrome"));
    // console.log(navigator.userAgent);

    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      // const { outcome } = await deferredPrompt.userChoice;
      // if (outcome === 'accepted') {
      //     deferredPrompt = null;
      // }
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          // console.log("User accepted the A2HS prompt");
        } else {
          // console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    }

    // let deferredPrompt;

    // window.addEventListener("beforeinstallprompt", function (e) {
    //   // Prevent Chrome 67 and earlier from automatically showing the prompt
    //   e.preventDefault();
    //   // Stash the event so it can be triggered later.
    //   deferredPrompt = e;
    //   console.log("bfinpr triggered");
    // });

    // btnAdd = Document.querySe

    // // Installation must be done by a user gesture! Here, the button click
    // btnAdd.addEventListener("click", (e) => {
    //   // hide our user interface that shows our A2HS button
    //   btnAdd.style.display = "none";
    //   // Show the prompt
    //   deferredPrompt.prompt();
    //   // Wait for the user to respond to the prompt
    //   deferredPrompt.userChoice.then((choiceResult) => {
    //     if (choiceResult.outcome === "accepted") {
    //       console.log("User accepted the A2HS prompt");
    //     } else {
    //       console.log("User dismissed the A2HS prompt");
    //     }
    //     deferredPrompt = null;
    //   });
    // });
  }
}

export function handleScroll() {
  //   const prevScrollY = useRef(0);
  //   const [goingUp, setGoingUp] = useState(false);
  //   const onScroll = (e) => {
  //     const currentScrollY = e.target.scrollTop;
  //     if (prevScrollY.current < currentScrollY && goingUp) {
  //       setGoingUp(false);
  //     }
  //     if (prevScrollY.current > currentScrollY && !goingUp) {
  //       setGoingUp(true);
  //     }
  //     prevScrollY.current = currentScrollY;
  //     console.log(goingUp, currentScrollY);
  //   };
  //   console.log("Scroll detected");
}
