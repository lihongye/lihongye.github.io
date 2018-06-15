import React, { Component } from "react";
export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemList:'一些数据',
    }
  }

  toggleNav = () => {
    this.setState({itemList:"lihongye"});
  }

  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    //console.log(props);
    return childrenArray[0] || null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    console.log(nextProps + "####" + nextState);
    
    return true;
  }
  componentWillUnmount(){

    console.log("ttttt");
    
  }

  componentDidMount(){
    var _this = this;
    var _item = _this.refs.header.classList;
    var tempTimer = setTimeout(()=>{
      _item.add("active");
      clearTimeout(tempTimer);
    },200);
  }
  render(){
    var cudeBox = [
      {class:"front",content:"首页"},
      {class:"left",content:"工作"},
      {class:"right",content:"学习记录"},
      {class:"bottom",content:"学习资料"},
      {class:"top",content:"生活随笔"},
      {class:"back",content:"个人简历"},
    ];
    var cudeImg = [
      {class:"front-in",content:require("../img/2.jpg")},
      {class:"back-in",content:require("../img/3.jpg")},
      {class:"left-in",content:require("../img/4.jpg")},
      {class:"right-in",content:require("../img/5.jpg")},
      {class:"top-in",content:require("../img/6.jpg")},
      {class:"bottom-in",content:require("../img/7.jpg")},
    ];
    var tempCudeBox = [];
    var tempCudeImg = [];
    for(var i = 0, len = cudeBox.length; i < len; i++){
      tempCudeBox.push(<div key={i} className={"surface "+ cudeBox[i].class}>{cudeBox[i].content}</div>);
      tempCudeImg.push(<div key={i} className={"surface-in "+ cudeImg[i].class}><img src={cudeImg[i].content} alt="" /></div>);
    }
    return(
      <div className="home">
        <div className="headerTop" ref="header">
          <div className="box">
							<div className="cude">
                {tempCudeBox}
                {tempCudeImg}
							</div>
						</div>
        </div>
        <div className="homeMain">
          
          
        </div>
        <div id="footer">
        
        </div>
      </div>
    );
  }
}