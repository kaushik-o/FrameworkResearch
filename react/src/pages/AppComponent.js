import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
// import ContentContainer from './ContentContainer'; 
// import YeomanImage from './YeomanImage';
import 'pages/app.css';
import Home from 'pages/home/HomeComponent';
import About from 'pages/about/AboutComponent';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);    

    // this.props.actions.get_questions();
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
          </Switch>
        </main>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
