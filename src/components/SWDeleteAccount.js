import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DeleteButton } from "../styling/ProfileStyling";
import { useSelector, useDispatch } from "react-redux";
import api from "../utils/api";
import { SWDELETE } from "../actions/index";

export default function SWDeleteAccount() {
  const [open, setOpen] = React.useState(false);
  const User = useSelector(state => state);
  const Dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    api()
      .delete(`/api/serviceworker/${User.swReducer.id}`)
      .then(res => {
        console.log(res);
        Dispatch({ type: SWDELETE, payload: res.data });
      })
      .catch(err => console.log(err));
  };

  const DeleteUser = e => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <DeleteButton onClick={handleClickOpen}>DELETE ACCOUNT</DeleteButton>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Goodbye!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Account Deleted! Thanks for using TipsEase!
            <br />
            You will now return to the Homepage!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={DeleteUser}>X close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
