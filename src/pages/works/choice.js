import React, { Component } from "react";
import Dasishixi from "./210306.js";
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
  test(e){
    console.log(e.target);
    
    var newTab=window.open('about:blank');
    setTimeout(function(){
      newTab.location.href="https://www.baidu.com/";
    }, 1000);

  }
  render(){
    if(this.props.match.params.topicId === "rendering"){
      return(
          <div className="mainContent">
              <Dasishixi/>
          </div>
        ); 
    }else{
        return(
            <div className="mainContent" onClick={this.test}>
              {this.props.match.params.topicId}
            </div>
          );
    }
    

  }
}