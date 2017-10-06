import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent{
 state = {
   searchTerm: ''
 };

 // doSearch is function be debounced 300 milliseconds
 doSearch = debounce(()=>{
   this.props.store.setSearchTerm(this.state.searchTerm);
 }, 300);

 handleChange = (event)=>{
   this.setState({searchTerm: event.target.value}, ()=>{
     this.doSearch();
   });
 }

 // shouldComponetUpdate(nextProps, nextState){
 //   return true;
 // }

 componentWillUpdate(nextProps, nextState){
   console.log('updating searchbar ');
 }

 render(){
   return (
     <input
     //ref={(input)=>this.searchInput = input}
       type='search'
       placeholder="Enter search term"
       value = {this.state.searchTerm}
       onChange = {this.handleChange}
     />
   );
 }
}

export default storeProvider()(SearchBar);
