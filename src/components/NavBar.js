//JaxAtwood

import React from "react";
import { Nav, Links, Logo, LogoAgain, Navvy } from "../styling/NavStyling";
import logo from "../styling/logo.png";
import logo2 from "../styling/logo2.png";
import { Link } from "react-router-dom";

export default function NavBar({ loggedInOrOut }) {
  return (
    <div>
      <div>
        <Nav>
          <Logo src={logo}></Logo>
          <LogoAgain src={logo2}></LogoAgain>
          <Navvy>
            <Links>
              <Link to="/">Home</Link>
            </Links>
            {!loggedInOrOut && (
              <Links>
                <Link to="/swlogin">Worker Login</Link>
              </Links>
            )}
            <Links>
              <Link to="/service/home">Tip Here!</Link>
            </Links>
            <Links>
              <Link to="/about">About</Link>
            </Links>
          </Navvy>
        </Nav>
      </div>
    </div>
  );
}
