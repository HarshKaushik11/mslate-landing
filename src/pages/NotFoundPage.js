/*eslint-disable*/
import React from "react";
import Four0Four from "../assets/four0four.gif";

const NotFoundPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={Four0Four} alt="notfound"></img>
    </div>
  );
};

export default NotFoundPage;
