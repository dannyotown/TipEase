import React from "react";
import Logout from "../components/Logout";
import { ProfileCard } from "../styling/ProfileStyling";
import DeleteAccount from "../components/DeleteAccount";

export default function Profile() {
  return (
    <ProfileCard>
      <h1>My Service Profile</h1>
      <div>Welcome Service Worker</div>
      <Logout />
      <DeleteAccount />
    </ProfileCard>
  );
}
