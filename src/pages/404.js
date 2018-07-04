import React, { Component } from "react";
export default class NotFoundPage extends Component{
  render(){
    return(
      <div className="notFound main">
        <div className="absolute">
         <h2 className="title"><i className="fa fa-times-circle-o fa-5x error"></i></h2>
         <p>页面没找到, 请检查下url是否正确</p>
        </div>
      </div>
    );
  }
}