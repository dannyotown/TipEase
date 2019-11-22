import styled from "styled-components";

const Box = styled.div`
  border: black solid 2px;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const RegButtons = styled.button`
  color: teal;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  border: black solid 1px;
  border-radius: 8px;
  height: 30px;
  width: 100px;
  text-align: center;
  background: white;
`;

const Fields = styled.input`
  display: flex;
  text-align: center;
  margin: 10px;
  height: 20px;
  width: 200px;
`;

export { Box, Fields, RegButtons };
