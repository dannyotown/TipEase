//dtown

import React, { useState } from "react";
import styled from "styled-components";
import api from "../utils/api";

function LogIn(props) {
  const [getLogin, setLogin] = useState({
    username: "",
    password: ""
  });
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
      .post("api/customers/login", getLogin)
      .then(response => {
        window.localStorage.setItem("key", response.data.token);
        props.history.push("/profile");
      })
      .catch(error => {
        console.log("HERE", error);
        alert("Incorrect Login Credentials");
      });
  };
  return (
    <LoginDiv>
      <LoginHeader>Login</LoginHeader>
      <LoginForm onSubmit={onSubmit}>
        <LoginInput
          type="text"
          name="username"
          value={getLogin.username}
          onChange={onChangeHandle}
          placeholder="Username"
          autoComplete="on"
        />
        <LoginInput
          type="password"
          name="password"
          value={getLogin.password}
          onChange={onChangeHandle}
          placeholder="Password"
          autoComplete="on"
        />
        <LoginButton type="submit">Log In</LoginButton>
        <LinkA href="/consumer">Create an Account</LinkA>
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
export default LogIn;
