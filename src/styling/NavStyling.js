import styled from "styled-components";

const Logo = styled.img `
    width: auto;
    height: 125px;
    margin-left: 30px;
    padding: 20px;
`
const LogoAgain = styled.img `
    width: auto;
    height: 75px;
    margin-top: 50px;
`

const Nav = styled.div `
    border: teal solid 3px;
    display: flex;
    width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    background-color: white;
    justify-content: space-around;
`

const Navvy = styled.div `
    width: 43%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding-top: 75px;
`

const Links = styled.a `
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
    border: solid black 1px;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    background-color: #00cccc;
`

export { Nav, Links, Logo, LogoAgain, Navvy };