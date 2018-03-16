import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import ContentContainer from './ContentContainer'; 
import YeomanImage from './YeomanImage';
import './app.css';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);    
    this.props.actions.get_questions();
  }

  render() {
    return (
      <div>
        <Header/>
        <ContentContainer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
