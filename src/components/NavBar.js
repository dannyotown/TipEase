//JaxAtwood

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Links, Logo, LogoAgain, Navvy } from "../styling/NavStyling";

export default function NavBar({ loggedInOrOut }) {
  return (
    <div>
      <Router>
        <div>
          <Router>
            <Nav>
              <Logo src={Logo}></Logo>
              <LogoAgain src="logo2.png"></LogoAgain>
              <Navvy>
                <Links href="/">Home</Links>
                {loggedInOrOut && <Links href="/login">Login</Links>}
                {!loggedInOrOut && (
                  <Links href="/service/home">Tip Here!</Links>
                )}
                <Links href="/">About</Links>
                <Links href="/">FAQ's</Links>
              </Navvy>
            </Nav>
          </Router>
        </div>
      </Router>
    </div>
  );
}
