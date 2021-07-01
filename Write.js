import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { createWord, addDictionaryFB } from "./redux/modules/dictionary";
import { firestore } from "./firebase";

// const dictionary = firestore.colloection("dictionary");

const Write = (props) => {
  const dispatch = useDispatch();
 
  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);

  const addWord = () =>{
   
    let word = {
      word: word_ref.current.value,
      desc: desc_ref.current.value,
      example: example_ref.current.value,
    }
    dispatch(addDictionaryFB(word));
    props.history.replace('/');
    // dictionary.add(word);
  };



  return (
    <React.Fragment>
      <Title>단어 추가하기</Title>
      <Line/>
      <InputWrapper>
        <p>단어</p>
        <input ref={word_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>설명</p>
        <input ref={desc_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>예시</p>
        <input ref={example_ref} />
      </InputWrapper>
      <Button onClick={addWord}>추가하기</Button>
    </React.Fragment> 
  );
};

const Title = styled.h1`
  width: 40vw;
  margin: 5px 10px 10px;
  color: #ffffff;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const InputWrapper = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px 14px;
  margin: 10px auto;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 10px 2px 8px 0px;
  border-radius: 3px;
  background-color: #ffffff;
  & > p {
    text-decoration: underline;
    font-size: 13px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 100%;
    padding: 3px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
  }
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

export default Write;
