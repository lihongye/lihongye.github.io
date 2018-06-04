import React, { Component } from "react";

// const Home = () => (
//   <div className="ww-aside-navbar" id="nslide"></div>
// );

// export default Home;
export default class Home extends Component{

  constructor(){
    super();
    this.state = {
      itemList:'一些数据',
    }
  }
  // state = {
  //   navState: false, //导航栏是否显示
  // };
  
  // 切换左侧导航栏状态
  toggleNav = () => {
    this.setState({itemList:"lihongye"});
  }
  // css动画组件设置为目标组件
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
    console.log("6666");
  }

  componentDidMount(){
   console.log("5555");
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