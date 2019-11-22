import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../utils/api";
import ServiceCards from "./ServiceCards";

export default function ServiceHome() {
  const [getServiceWorkers, setServiceWorkers] = useState([]);
  useEffect(() => {
    api()
      .get("/api/serviceworker/")
      .then(response => setServiceWorkers(response.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <ServiceHomeContainer>
      <ServiceHeader>Service Workers</ServiceHeader>
      <ServiceWorkerCardBox>
        {getServiceWorkers.map((worker, index) => {
          return (
            <ServiceCards
              worker={worker}
              key={index}
              setServiceWorkers={setServiceWorkers}
            />
          );
        })}
      </ServiceWorkerCardBox>
    </ServiceHomeContainer>
  );
}

const ServiceHomeContainer = styled.div`
    width: 75%
    height: 100%;
    border: solid white 1px;
    margin: 0 auto;
    margin-top: 1%;
`;
const ServiceHeader = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2%;
  border-bottom: 1px solid white;
`;
const ServiceWorkerCardBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 2%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
