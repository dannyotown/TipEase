import styled from "styled-components";

const ProfileCard = styled.div`
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
`;

const LOButton = styled.button`
  color: teal;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  border: black solid 1px;
  border-radius: 8px;
  height: 30px;
  width: 100px;
`;

const DeleteButton = styled(LOButton)`
  height: 50px;
  width: 200px;
  color: red;
`;

export { ProfileCard, LOButton, DeleteButton };
