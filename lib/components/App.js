import React from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state-api';

class App extends React.Component {

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  }

  articlesActions = {
    lookupAuthor:(authorId) => this.state.authors[authorId]
  };

  render(){
    debugger;
    return(
      <ArticleList
        articles = {this.state.articles}
        actions = {this.articlesActions}
      />
    );
  }
}

export default App;
