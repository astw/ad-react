import React from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state-api';

class App extends React.Component {

  state = this.props.store.getState();

  render(){
    debugger;
    return(
      <ArticleList
        articles = {this.state.articles}
        store = {this.props.store }
      />
    );
  }
}

export default App;
