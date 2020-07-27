import React from "react";
import "../../App.css";
import CertItems from "./CertItems";

export default function Certifications() {
  return (
    <div className="content-parent-container">
      <div style={contentContainer}>
        <h2 className="gradient-color">Certifcations</h2>
        <CertItems />
      </div>
    </div>
  );
}

const sectionStyle = {
  height: "700px",
  margin: "30px 0px",
  padding: "5em 0",
  transform: "skewY(-2deg)",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const contentContainer = {
  transform: "skewY(2deg)",
};
