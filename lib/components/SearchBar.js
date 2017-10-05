import React from 'react';

class SearchBar extends React.Component{

handleChange = ()=>{
  console.log(this.searchInput.value);
}

render(){
  return (
    <input
      ref={(input)=>this.searchInput = input}
      type='search'
      placeholder="Enter search term"
      onChange = {this.handleChange}
    />
  );
}

}

export default SearchBar;
