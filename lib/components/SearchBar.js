import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component{
 state = {
   searchTerm: ''
 };

 // doSearch is function be debounced 300 milliseconds
 doSearch = debounce(()=>{
   this.props.doSearch(this.state.searchTerm);
 }, 300);
 handleChange = (event)=>{
   this.setState({searchTerm: event.target.value}, ()=>{
     this.doSearch();
   });
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

export default SearchBar;
