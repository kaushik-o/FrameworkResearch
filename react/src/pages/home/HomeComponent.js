import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import QuestionList from 'components/QuestionList';

import { questionOperations } from 'state/ducks/questions/';

class HomeComponent extends Component { 
  constructor (props){
    super(props);
    this.state = {};
    this.state.questions = this.props.questions;
  }
  componentDidMount() {
    this.props.getQuestions();
  }
  
  render() {
    return (
      <div>
      <div>
        Home page
      </div>
      <QuestionList questions={this.props.questions} />
      </div>
    );
  }
}  

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  console.log("STAT",state);
  const props = { questions: state.questions };
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestions: questionOperations.getQuestions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
