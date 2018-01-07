import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPrices} from './actions';
class Content extends Component{


constructor(){
  super();
  this.state={

  }
}
componentDidMount(){
  this.props.fetchPrices("ABT");
}
render(){
  return(
    <div>
    </div>
  )
}

}
function mapStateToProps(state){
return {
  Prices:state.Prices
};
}
export default connect(mapStateToProps,{fetchPrices})(Content);
