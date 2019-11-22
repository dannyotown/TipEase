//JaxAtwood

import React from "react";
import api from "../utils/api";
import { Box, Fields, RegButtons } from "../styling/RegisterStyling";
import { useSelector, useDispatch } from "react-redux";
import { SWCREATESUCCESS, SWCREATEFAIL } from "../actions/index";
import { Link } from "react-router-dom";

export default function SWRegister(props) {
  const [form, setForm] = React.useState({
    username: "",
    password: "",
    FirstName: "",
    LastName: "",
    email: "",
    company: "",
    balance: undefined,
    tagline: "",
    YearsAtCompany: undefined
  });
  const User = useSelector(state => state);
  const Dispatch = useDispatch();
  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const swlogin = e => {
    e.preventDefault();
    api()
      .post("api/serviceworker/signup", form)
      .then(res => {
        Dispatch({ type: SWCREATESUCCESS, payload: res.data });
        localStorage.setItem("key", res.data.token);
        props.history.push("/swlogin");
      })
      .catch(error => {
        console.log(error);
        Dispatch({ type: SWCREATEFAIL });
        setForm({
          username: "",
          password: "",
          FirstName: "",
          LastName: "",
          email: "",
          company: "",
          balance: undefined,
          tagline: "",
          YearsAtCompany: undefined
        });
      });
  };

  return (
    <Box>
      <h2>Worker Registry</h2>
      <form onSubmit={swlogin}>
        <Fields
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChanges}
          value={form.username}
        />
        <Fields
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChanges}
          value={form.password}
        />
        <Fields
          required
          type="text"
          placeholder="first name"
          name="FirstName"
          onChange={handleChanges}
          value={form.FirstName}
        />
        <Fields
          required
          type="text"
          placeholder="last name"
          name="LastName"
          onChange={handleChanges}
          value={form.LastName}
        />
        <Fields
          required
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChanges}
          value={form.email}
        />
        <Fields
          required
          type="text"
          placeholder="company name"
          name="company"
          onChange={handleChanges}
          value={form.company}
        />
        <Fields
          required
          type="number"
          placeholder="balance"
          name="balance"
          onChange={handleChanges}
          value={form.balance}
        />
        <Fields
          required
          type="text"
          placeholder="tagline"
          name="tagline"
          onChange={handleChanges}
          value={form.tagline}
        />
        <Fields
          required
          type="number"
          placeholder="YearsAtCompany"
          name="YearsAtCompany"
          onChange={handleChanges}
          value={form.YearsAtCompany}
        />
        <RegButtons>Submit</RegButtons>
      </form>
      <Link to="/swlogin">Already Have an Account?</Link>
    </Box>
  );
}
