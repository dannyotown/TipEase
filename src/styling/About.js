import styled from 'styled-components';

const Card = styled.div `
border-radius: 5px;
border: 3px solid teal;
background: #666;
text-align: center;
`
const CardHeader = styled.h2 `
color: black;
text-align: center;
`

const CardImg = styled.img `
width: 100%;
`

const CardText = styled.p `

`
const Socials = styled.span `

`
const CenteredHeader = styled.h1 `
text-align: center;
`
const Grid = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row-gap: 25px;
grid-column-gap: 50px;
`
const Container = styled.div `
width: 75%;
margin: 0 auto;
`

export {Container, Card, CenteredHeader, Grid,  CardHeader, CardImg, CardText, Socials};