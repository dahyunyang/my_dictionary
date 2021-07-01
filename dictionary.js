// dictionary.js
import {firestore} from "../../firebase";

const dictionary_db = firestore.collection("dictionary");

// Actions
const LOAD = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';

const initialState = {
  word_list: [
    {
      // id: "list_0",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      // id: "list_1",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
  ],
};

// Action Creators
export const loadWord = (dictionary)=> {
    return { type: LOAD, dictionary };
  }
  
  export const createWord= (dictionary)=> {
    return { type: CREATE, dictionary}; //txt 인풋
  }

  // 통신함수
export const loadDictionaryFB = () => {
  return function (dispatch){

    dictionary_db.get().then((docs) => {
      let dictionary_data = []; //리덕스에 넣어줄 것임.
      docs.forEach((doc) => {
        
        if(doc.exists){
          dictionary_data = [...dictionary_data, {id: doc.id, ...doc.data()}]; //doc에 있는 딕셔너리를 넣어줌
        }
      })

      console.log(dictionary_data);
      dispatch(loadWord(dictionary_data));

    });
  };
};

export const addDictionaryFB = (dictionary) => {
  return function (dispatch){
    // let dictionary_data = {word: word_text, desc: word_text, example: word_text };
    let new_dict;

    dictionary_db.add(dictionary).then(docRef => {
      new_dict = {...dictionary, id: docRef.id};
      dispatch(createWord(new_dict));
    })
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOAD": {
        if(action.dictionary.length > 0){
          return {word_list: action.dictionary};
        } 
        return state;
      }


    case "dictionary/CREATE": {
      // 받아온 데이터를 추가한 새 리스트 만들기
      const new_word_list = [...state.word_list, action.dictionary];
        
    //   state를 갈아끼워요
      return {...state, word_list: new_word_list };
    }
    default:
      return state;
  }
}