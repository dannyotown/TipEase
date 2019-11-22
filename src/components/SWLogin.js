//JaxAtwood

import React, { useState } from "react";
import styled from "styled-components";
import api from "../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { SWLOGINSUCCESS, SWLOGINFAIL } from "../actions/index";

function SWLogin(props) {
  const [getLogin, setLogin] = useState({
    username: "",
    password: ""
  });
  const User = useSelector(state => state);
  const Dispatch = useDispatch();

  const onChangeHandle = e => {
    e.preventDefault();
    setLogin({
      ...getLogin,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    api()
      .post("api/serviceworker/login", getLogin)
      .then(response => {
        Dispatch({ type: SWLOGINSUCCESS, payload: response.data.person });
        window.localStorage.setItem("key", response.data.token);
        props.history.push("/swprofile");
      })
      .catch(error => {
        Dispatch({ type: SWLOGINFAIL });
        console.log(error);
        alert("Incorrect Login Credentials");
      });
  };
  return (
    <LoginDiv>
      <LoginHeader>SW Login</LoginHeader>
      <LoginForm onSubmit={onSubmit}>
        <LoginInput
          type="text"
          name="username"
          value={getLogin.username}
          onChange={onChangeHandle}
          placeholder="Username"
        />
        <LoginInput
          type="password"
          name="password"
          value={getLogin.password}
          onChange={onChangeHandle}
          placeholder="Password"
        />
        <LoginButton type="submit">Log In</LoginButton>
        <LinkA href="/service">Create an Account</LinkA>
      </LoginForm>
    </LoginDiv>
  );
}

const LoginDiv = styled.div`
  width: 20%;
  margin: 0 auto;
  background-color: #00cccc;
  color: white;
  padding: 1%;
  height: 300px
  box-shadow: 3px 4px #f2f2f2;
`;
const LoginHeader = styled.h1`
  margin-top: 10%;
`;
const LoginInput = styled.input`
  height: 25px;
  margin-top: 2.5%;
  padding: 0.5%;
`;
const LoginButton = styled.button`
  height: 32px;
  width: 99%;
  margin: 0 auto;
  background-color: white;
  border: solid 1px #b8b8b8;
  font-size: 1.25rem;
  color: #00cccc;
  margin-top: 5%;
`;
const LoginForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 5%;
`;
const LinkA = styled.a`
  margin: 0 auto;
`;

export default SWLogin;
