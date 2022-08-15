import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
  padding: 20px;

  width: 100%;
  height: 50px;

  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
`;

export const Describe = styled.input`
  width: 250px;
  height: 30px;

  margin-right: 20px;

  color: "#000";
`;

export const Value = styled.input`
  width: 150px;
  height: 30px;

  margin-right: 20px;

  color: "#000";
`;

export const Type = styled.input.attrs({ type: "checkbox" })``;

export const Add = styled.button`
  width: 150px;
  height: 30px;

  cursor:pointer;
`;

export const Label = styled.label`
color: #000;
`;