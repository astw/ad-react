import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

class App extends React.Component {

  // to make store global
  static childContextTypes ={
    store: PropTypes.object,
  };

  // to make store global availabe to all components
  getChildContext(){
    return {
      store:this.props.store
    };
  }

  state = this.props.store.getState();

  render(){
    return(
      <ArticleList
        articles = {this.state.articles}
        store = {this.props.store }
      />
    );
  }
}

export default App;
