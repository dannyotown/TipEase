//JaxAtwood

import React from "react";
import { Link } from "react-router-dom";
import { Splash, Buttons } from "../styling/WelcomeStyling";

export default function Welcome() {
  return (
    <Splash>
      <h1>Get Started Today</h1>
      <h2>Start by Registering an Account!</h2>
      <p>I am a...</p>
      <Link to="/consumer">
        <Buttons>Customer</Buttons>
      </Link>
      <Link to="/service">
        <Buttons>Servicer</Buttons>
      </Link>
    </Splash>
  );
}
