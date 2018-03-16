import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { questionOperations } from 'state/ducks/questions/';

class HomeComponent extends Component { 
  componentDidMount() {
    this.props.getQuestions();
  }
  
  render() {
    return (
      <div>
        Home page
      </div>
    );
  }
}  

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = { questions: state.questions };
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestions: questionOperations.getQuestions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
