import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  width: 240px;

  text-align: center;

  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
`;

export const Title = styled.p`
color: #000;
`;


export const Icon = styled.span`
width: 10px;
height: 10px;
color: #000;
padding: 10px;
margin-right: 20px;
`;

export const Content = styled.div`
display: flex;

padding: 5px;

justify-content: space-between;
`;

export const Amount = styled.h2`
color: #000;
`;
