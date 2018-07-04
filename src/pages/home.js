import React, { Component } from "react";
export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      cudeBox:[
        {class:"front",content:"首页"},
        {class:"left",content:"工作"},
        {class:"right",content:"学习记录"},
        {class:"bottom",content:"学习资料"},
        {class:"top",content:"生活随笔"},
        {class:"back",content:"个人简历"},
      ],
      cudeImg:[
        {class:"front-in",content:require("../img/2.jpg")},
        {class:"back-in",content:require("../img/3.jpg")},
        {class:"left-in",content:require("../img/4.jpg")},
        {class:"right-in",content:require("../img/5.jpg")},
        {class:"top-in",content:require("../img/6.jpg")},
        {class:"bottom-in",content:require("../img/7.jpg")}, 
      ],
      sliderContent:[
        {color:"#2e6930",ico:"fa-table",title:"Datatables",url:"/test1",content:"是一款jquery表格插件。它是一个高度灵活的工具，可以将任何HTML表格添加高级的交互功能,可以自适应。"},
        {color:"#05920A",ico:"fa-check-square-o",title:"Validation",url:"/test2",content:"表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。"},
        {color:"#0fcf16",ico:"fa-bar-chart",title:"ECharts",url:"/test3",content:"一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8 / 9 / 10 / 11，Chrome，Firefox，Safari等）。"},
        {color:"#9ecf0f",ico:"fa-sliders",title:"Swiper",url:"/test4",content:"是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。"},
        {color:"#d6c80f",ico:"fa-list",title:"Layer",url:"/test5",content:"丰富多样的 Web 弹出层组件，可轻松实现 Alert/Confirm/Prompt/ 普通提示/页面区块/iframe/tips等等几乎所有的弹出交互。"},
        {color:"#fdad73",ico:"fa-list-alt",title:"Bootstrap",url:"/test6",content:"是前端组件库，用于开发响应式布局、移动设备优先的 WEB 项目。是一套用于 HTML、CSS 和 JS 开发的开源工具集。"}
      ],
      swiper:window.Swiper
    }
  }
  componentWillUnmount(){
    if (this.swiper) { 
      this.swiper.slideTo(0, 0);
      this.swiper.destroy();
      this.swiper = null;
     }
  }
  componentDidMount(){
    var _this = this, _item = _this.refs.header.classList, tempTimer;

    tempTimer = setTimeout(()=>{
      _item.add("active");
      clearTimeout(tempTimer);
    },200);

    _this.swiper = new _this.state.swiper('.swiper-container', {
        loop:true,
        autoplay:true,
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
  }
  render(){
    var _this = this.state, tempCudeBox = [], tempCudeImg = [], tempSlider = [];

    for(var i = 0, len = _this.cudeBox.length; i < len; i++){
      tempCudeBox.push(
        <div key={i} className={"surface "+ _this.cudeBox[i].class}>
          {_this.cudeBox[i].content}
        </div>
      );
      tempCudeImg.push(
        <div key={i} className={"surface-in "+ _this.cudeImg[i].class}>
          <img src={_this.cudeImg[i].content} alt="" />
        </div>
      );
    }

    for(var j = 0, len2 = _this.sliderContent.length; j < len2; j++){
      tempSlider.push(
        <div key={j} className="swiper-slide">
          <div className="slideDetial" style={{backgroundColor:_this.sliderContent[j].color}}>
            <a className="blockLink" href={_this.sliderContent[j].url }>
              <div className="ico">
                <i className={"fa fa-5x "+_this.sliderContent[j].ico }></i>
              </div>
              <h3 className="subTitle">{_this.sliderContent[j].title}</h3>
              <div className="content">
                {_this.sliderContent[j].content}
              </div>
            </a>
            
          </div>
        </div>
      );
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
        <div className="homeMain main">
          <div className="swiper-container">
            <div className="swiper-wrapper">
                {tempSlider}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );

  }
}