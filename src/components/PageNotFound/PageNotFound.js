import React from "react";
import pnf from "../../images/pnf.jpg";
import "./PageNotFound.scss";
const PageNotFound = () => {
  return (
  <div >
  <img className="error" src={pnf} alt="pnf" />
</div>
  );
};

export default PageNotFound;
