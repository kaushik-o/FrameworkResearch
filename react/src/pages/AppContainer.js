/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { questionOperations } from 'state/ducks/questions';
import Main from 'pages/AppComponent';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, questions_reducer} = this.props;
    return <Main actions={actions} questions_reducer={questions_reducer}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({ get_questions: PropTypes.func.isRequired }),
  questions_reducer: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = { questions_reducer: state.questions_reducer };
  return props;
}

const mapDispatchToProps = {
  getQuestions: questionOperations.getQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(App);