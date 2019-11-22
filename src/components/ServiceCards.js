import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export default function ServiceCards({ worker, setServiceWorkers }) {
  const [getModal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      <ServiceCard>
        <ServiceCardHeader>
          {worker.FirstName} {worker.LastName}
        </ServiceCardHeader>
        <ServiceCardInfo>
          <ServiceInfo>Company: {worker.company}</ServiceInfo>
          <ServiceInfo>Years at Company: {worker.YearsAtCompany}</ServiceInfo>
          <ServiceInfo>Email: {worker.email}</ServiceInfo>
          <ServiceInfo>
            Current Balance: ${worker.balance !== null ? worker.balance : "0"}
          </ServiceInfo>
          <UpdateTip onClick={showModal}>Update Tip</UpdateTip>
        </ServiceCardInfo>
      </ServiceCard>
      <Modal
        show={getModal}
        handleClose={hideModal}
        worker={worker}
        setServiceWorkers={setServiceWorkers}
      >
        <p>Modal</p>
        <p>Data</p>
      </Modal>
    </>
  );
}
const ServiceCard = styled.div`
  width: 45%;
  height: 225px;
  margin: 0 auto;
  background-color: #fafafa;
  border: 2px solid #3dcccc;
  margin-bottom: 2%;
`;
const ServiceCardHeader = styled.div`
  text-align: center;
  color: #808080;
  font-size: 2rem;
  border-bottom: 1px solid #3dcccc;
  padding: 1%;
`;
const ServiceCardInfo = styled.div`
  width: 90%;
  margin-top: 1%;
  margin: 0 auto;
`;
const UpdateTip = styled.button`
  margin: auto;
  width: 100%;
  height: 25px;
  margin-top: 1%;
`;

const ServiceInfo = styled.div`
  padding: 1%;
  font-size: 1rem;
  color: #808080;
  text-align: center;
`;
