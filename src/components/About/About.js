import React from "react";
import AboutCard from "./AboutCard";

import { CenteredHeader, Grid, Container } from "../../styling/About";

const team = [
  {
    name: "Scott Beeker",
    text: "Project Lead",
    img: "https://avatars3.githubusercontent.com/u/49079747?s=400&v=4",
    github: "https://github.com/dangolbeeker"
  },
  {
    name: "Jackie Atwood",
    text: "React Developer",
    img: "https://avatars3.githubusercontent.com/u/52709784?s=400&v=4",
    github: "https://github.com/JaxAtwood"
  },
  {
    name: "Danny Town",
    text: "React Developer",
    img: "https://avatars3.githubusercontent.com/u/47186976?s=400&v=4",
    github: "https://github.com/dannyotown"
  },
  {
    name: "Eli Rubin-Calvert",
    text: "UI Developer",
    img: "https://avatars2.githubusercontent.com/u/49409582?s=400&v=4",
    github: "https://github.com/elirc"
  },
  {
    name: "Craig Bourne",
    text: "React Developer",
    img: "https://ca.slack-edge.com/T4JUEB3ME-UES4J7FH9-1f82852a421c-512",
    github: ""
  },
  {
    name: "Germaine Pannell",
    text: "React Developer",
    img: "https://avatars3.githubusercontent.com/u/9157046?s=400&u=c203d69be2272e55cc81144ba405b4fbb08dd4d7&v=4",
    github: "https://github.com/germainep"
  }
];

export default function About() {
  return (
    <Container>
      <CenteredHeader>About The Team</CenteredHeader>
      <Grid>
        {team.map(member => (
            <AboutCard name={member.name} text={member.text} img={member.img} github={member.github}/>
          ))}
        
      </Grid>
    </Container>
  );
}
