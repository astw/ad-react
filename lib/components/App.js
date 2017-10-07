import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import pickby from 'lodash.pickby';
import Timestamp from './Timestamp';
// import Perf from 'react-addons-perf';
// if(typeof window !== undefined){
//   window.Perf = Perf;
// }

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

  appState  = () =>{
    const{articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }
  //state = this.props.store.getState();
  state = this.appState();
  setSearchTerm = (searchTerm) =>{
    this.setState({searchTerm});
  }
  onStoreChange = ()=>{
    this.setState(this.appState);
  }
  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
    // setImmediate(()=>{
    //   Perf.start();
    // });
    //
    // setTimeout(()=>{
    //   Perf.stop();
    // },5000);
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render(){
    //let { articles, searchTerm } = this.state;
    let {articles, searchTerm} = this.appState();
    const searchRE = new RegExp(searchTerm, 'i'); // searchTerm case insensitive.
    if(searchTerm){
      articles = pickby(articles,(value) =>{
        return value.title.match(searchRE) ||
          value.body.match(searchRE);
      });
    }
    return(
      <div>
        <Timestamp  />
        <SearchBar />,
        <ArticleList
          articles = {articles}
        />
      </div>
    );
  }
}

export default App;
