// import React, {useState} from 'react';
import React from 'react';
import { Route, Switch } from 'react-router';
import {BrowserRouter} from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";

import WordList from "./WordList";
import Write from "./Write";
import NotFound from './NotFound';

import {connect} from 'react-redux';
import {loadWord, createWord, loadDictionaryFB, addDictionaryFB} from './redux/modules/dictionary';
import {firestore} from "./firebase";
import { documentURI } from 'min-document';

const mapStateToProps = (state) => {
 return {word: state.dictionary.word_list};
};

const mapDispatchToProps = (dispatch) => ({
    load: () => {
      dispatch(loadDictionaryFB());
    },
  
    create: (new_word) => {
      dispatch(addDictionaryFB(new_word));
    },
});

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    };
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  };
  
  componentDidMount(){
    this.props.load();
  }

  addWordList = () => {
    const new_word = this.text.current.value;
    this.props.create(new_word);
  }

  render() {
    return(
      <div className="App">
        <React.Fragment>
          <Wrapper>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={WordList} />
                <Route path="/write" exact component={Write} />
                <Route render = {(props) => (<NotFound history = {props.history}/>)}/>
              </Switch>
            </BrowserRouter>
          </Wrapper>
        </React.Fragment>
      </div>
    );
  }  

}


const Wrapper = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #76c893;
  padding: 20px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

// export default App;
