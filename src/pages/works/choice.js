import React, { Component } from "react";
import Dssx from "./dssx";
import Hksj from "./hksj";
import Lkxx from "./lkxx";
export default class Choice extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillUnmount(){
    
  }
  componentDidMount(){
    
  }
  renderChoice(){
  	var choice_direct = this.props.match.params.topicId;
  	if (choice_direct === "hksj") {
      return (
        <Hksj/>
      );
    }else if(choice_direct === "lkxx"){
      return (
        <Lkxx/>
      );
    }else if(choice_direct === "dssx"){
    	return (
        <Dssx/>
      );
    }
  }
  render(){
  	return(
      <div className="mainContent">
           { this.renderChoice() }
      </div>
    ); 

  }
}