import React from "react";
import styled from "styled-components";

const NotFound = (props) => {
    console.log(props);
    return (
    <div>
    <Title>나만의 사전</Title>
    <Line/>
    <h1>주소가 올바르지 않습니다</h1>
    <Button onClick={() =>{
            props.history.goBack();
    }} > 뒤로 가기</Button>
    </div>

    );
};

const Title = styled.h1`
  width: 40vw;
  margin: 5px 10px 15px;
  color: #ffffff;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Button = styled.button`
    background-color: #168aad;
  border-color: #168aad;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 6px 10px;
  margin: 15px 10px;
  border-radius: 3px;
`;


export default NotFound;