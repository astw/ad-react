import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import pickby from 'lodash.pickby';

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
  setSearchTerm = (searchTerm) =>{
    this.setState({searchTerm});
  }

  render(){
    let { articles, searchTerm } = this.state;
    if(searchTerm){
      articles = pickby(articles,(value) =>{
        return value.title.match(searchTerm) ||
          value.body.match(searchTerm);
      })
    }
    return(
      <div>
        <SearchBar doSearch = {this.setSearchTerm}/>,
        <ArticleList
          articles = {articles}
          store = {this.props.store }
        />
      </div>
    );
  }
}

export default App;
