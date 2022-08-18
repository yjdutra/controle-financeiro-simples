import styled from "styled-components";
   
export const Container = styled.div`
  width: 98%;

  height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 25px;
  margin-left: 1%;
  padding: 15px 0px;
  gap: 10px;

  border-radius: 5px;

  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`;

export const Describe = styled.input`
  width: 250px;
  height: 50px;

  margin-right: 20px;
  border-radius: 5px;

  color: "#000";
`;

export const Value = styled.input`
  width: 230px;
  height: 50px;

  margin-right: 20px;
  border-radius: 5px;

  color: "#000";
`;

export const Radio = styled.input`
  color: "#000";
  accent-color: teal;
`;

export const RadioContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;

`;

export const Add = styled.button`
  width: 80px;
  height: 50px;

  cursor: pointer;
  background-color: teal;
  color: #fff;

  border-radius: 5px;
`;

export const Label = styled.label`
  color: #000;
`;
