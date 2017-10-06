import React from 'react';
import PropTypes from 'prop-types';


const storeProvider = (extraProps) => (Component) => {
  return class extends React.PureComponent{
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    }

    onStoreChange = ()=>{
      // force react re-render 
      this.forceUpdate();
    }

    componentDidMount(){
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount(){
      this.props.store.unsubscribe(this.subscriptionId);
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
