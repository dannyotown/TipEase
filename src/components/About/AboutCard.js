import React from "react";
import { Card, CardHeader, CardImg, CardText, Socials} from "../../styling/About";
import { Links } from "../../styling/NavStyling";
export default function AboutCard(props) {

  return (
    <Card>
      <CardHeader>
        {props.name}
      </CardHeader>
      <CardImg src={props.img} alt=''/>
      <CardText>{props.text}</CardText>
      <Socials><Links href={props.github}>Github</Links> </Socials>
    </Card>
  )

}