import React from 'react';

class SearchBar extends React.Component{
 state = {
   searchTerm: ''
 };

 handleChange = (event)=>{
   this.setState({searchTerm: event.target.value})
   console.log(this.state.searchTerm);
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
