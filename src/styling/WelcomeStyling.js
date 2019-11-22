import styled from "styled-components";

const Splash = styled.div `
    border: solid 2px black;
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    margin-top: 30px;
    line-height: 2px;
    background-color: white;
`

const Buttons = styled.button `
    color: teal;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    border: black solid 1px;
    border-radius: 10px;
    height: 60px;
    width: 150px;
`

export { Splash, Buttons };