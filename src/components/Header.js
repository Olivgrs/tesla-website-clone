import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import MenuIcon from "@material-ui/icons/Menu";
function header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="teslalogo" className="Logo" />
      </div>
      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar ROOF</p>
        <p>Solar PANELS</p>
      </div>
      {/* right part */}
      <div className="header__right">
        <p>Shop </p>
        <p>Tesla Account</p>
        <MenuIcon  className="header__right__menuicon"/>
      </div>
    </div>
  );
}

export default header;
