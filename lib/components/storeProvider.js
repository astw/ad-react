import React from 'react';
import PropTypes from 'prop-types';


const storeProvider = (extraProps) => (Component) => {
  return class extends React.Component{
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    }

    render(){
      return <Component
        {...this.props}
        {...extraProps(this.context.store, this.props)}
        store = {this.context.store} />;
    }
  };
};

// extract store out of the context, and
// provide store to other components as props

// const storeProvider = (Component) => {
//   const WithStore = (props, {store}) =>
//     <Component {...props} store = {store} />;
//
//   WithStore.contextTypes = {
//     store: PropTypes.object,
//   };
//
//   WithStore.displayName = `${Component.name}Container`;
//
//   return WithStore;
// };

export default storeProvider;
