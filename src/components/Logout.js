//JaxAtwood

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { LOButton } from "../styling/ProfileStyling";

export default function Logout() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const logout = e => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <LOButton onClick={handleClickOpen}>LOGOUT</LOButton>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Goodbye!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thanks for using TipsEase!
            <br />
            You will now return to the Homepage!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={logout}>X close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
