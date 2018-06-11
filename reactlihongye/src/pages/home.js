import React, { Component } from "react";
export default class Home extends Component{

  constructor(){
    super();
    this.state = {
      itemList:'一些数据',
    }
  }

  toggleNav = () => {
    this.setState({itemList:"lihongye"});
  }

  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    console.log(nextProps + "####" + nextState);
    
    return true;
  }
  componentWillUnmount(){
    
  }

  componentDidMount(){
   
  }
  render(){
    return(
      <header className="header-container">
        <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}>test</span>
        <span className="header-title">{this.state.itemList}</span>
      </header>
    );
  }
}