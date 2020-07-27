import React from "react";
import ArchitectImg from "../../media/awsarchitect.png";
import DeveloperImg from "../../media/awsdeveloper.png";
import "../../App.css";
import "./certifications.css";

const certs = [
  {
    name: "AWS Solutions Architect - Associate",
    earned: "June 2020",
    badgeImg: ArchitectImg,
  },
  {
    name: "AWS Developer - Associate",
    earned: "July 2020",
    badgeImg: DeveloperImg,
  },
];

export default function CertItems() {
  const certitems = certs.map((cert) => {
    return (
      <div className="cert-item-container">
        <div>
          <img className="img-style" src={cert.badgeImg}></img>
        </div>
        <div>
          <div>{cert.earned}</div>
        </div>
      </div>
    );
  });
  return <div className="cert-items-main-container">{certitems}</div>;
}
