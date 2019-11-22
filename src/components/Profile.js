import React from "react";
import Logout from "../components/Logout";
import { ProfileCard } from "../styling/ProfileStyling";
import CUDeleteAccount from "./CustomerDeleteAccount";

export default function Profile() {
  return (
    <ProfileCard>
      <h1>My Customer Profile</h1>
      <div>Welcome User</div>
      <Logout />
      <CUDeleteAccount />
    </ProfileCard>
  );
}
