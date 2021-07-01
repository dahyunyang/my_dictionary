import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const WordList = (props) => {
  const word_list = useSelector(state => state.dictionary.word_list);

  return (
    <React.Fragment>
      <Title>나만의 사전</Title>
      <Line/>
      {word_list && word_list.map((w,index) => {
        return (
          <Card key={index}>
            <Text color="#888888" size="13px" underline>
              단어
            </Text>
            <Text>{w.word}</Text>
            <Text color="#888888" size="13px" underline>
              설명
            </Text>
            <Text>{w.desc}</Text>
            <Text color="#888888" size="13px" underline>
              예시
            </Text>
            <Text color="blue">{w.example}</Text>
          </Card>
        );
      })}

      <AddButton onClick={() => {props.history.push("/write");}}>
        +
      </AddButton>
    </React.Fragment>
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

const Card = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 10px 2px 8px 0px;
  background-color: #ffffff;
  border-radius: 3px;
`;

// 텍스트 스타일을 잡아줄거예요.
// size라는 props가 있으면 size대로 폰트 크기를 넣어주고,
// underline이라는 props가 있으면 밑줄을 줄거예요.(text-decoration 속성을 사용합니다.)
// color라는 props가 있으면 color대로 텍스트 컬러를 바꿔줄거예요.
const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const AddButton = styled.button`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  font-size: 100px;
  border: 0;
  background-color: #168aad;
  border-color: #168aad;
  color: #ffffff;
`;

export default WordList;
