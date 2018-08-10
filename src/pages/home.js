import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      sliderContent:[
        {color:"#2e6930",ico:"fa-television",title:"公司官网",url:"/test1",content:"企业建站,严格按照提供的设计稿和原型来开发并提供一些优化建议,或者只给出一些想法,剩下的全权由我方设计和开发. 价格优惠可以谈. 公司官网能让公司客户直观的了解到一个公司的基本概况, 对公司有一个初步的了解, 为客户对公司的信任度增加了砝码. 可以在公司官网上开发留言或者在线服务功能,与客户的沟通更加便捷, 比使用常规的聊天软件, 在业务洽谈方面成功率更搞。提供长期维护。"},
        {color:"#05920A",ico:"fa-opencart",title:"Magento电商网站",url:"/test2",content:"整站建设也可以在原来的基础上进行二次开发,需要提供设计稿。 Magento标准的多语言、多货币和多商店支持, 支持多种国际流行支付方式和多种配送方式, 安全性非常高，目前尚未听说Magento网站被黑, 支持绑定产品，虚拟产品，产品多属性. Magento 功能越来越人性化，也是越来越新颖。像是产品标签、多送货地址或产品比较系统等功能，您不需要支付额外的费用来取得。提供长期维护。"},
        {color:"#0fcf16",ico:"fa-credit-card",title:"P2P金融网站",url:"/test3",content:"整站建设也可以在原来的基础上进行二次开发,需要提供设计稿。近年来, 网上借贷成了主流的趋势, 比如p2p网络贷款, 又名点对点信贷, 或称个体对个体信贷。P2P金融的形式基本上是跟着互联网的演变走的，在PC时代诞生了支付宝、财付通等一系列支付产品，并且这些平台牢牢占据着市场份额。P2P的诞生本就是为了个人金融服务，是将个人财富妥善管理的一种形式，因此在移动互联网爆发以后，P2P的优势更加明显。"},
        {color:"#9ecf0f",ico:"fa-dashboard",title:"后台管理系统",url:"/test4",content:"整站建设也可以在原来的基础上二次开发, 需要提供产品原型。网站后台管理系统主要是用于对网站前台的信息管理，如文字、图片、影音、和其他日常使用文件的发布、更新、删除等操作，同时也包括会员信息、订单信息、访客信息的统计和管理。简单来说就是对网站数据库和文件的快速操作和管理系统，以使得前台内容能够得到及时更新和调整。简单的对网站的一些banner更新, 文章发布不需要专业技术人员也可以操作。"},
        {color:"#d6c80f",ico:"fa-mobile-phone",title:"移动端网站",url:"/test5",content:"整站建设也可以在原来的基础上二次开发, 严格按照提供的设计稿和原型来开发并提供一些优化建议,或者只给出一些想法,剩下的全权由我方设计和开发. 价格优惠可以谈。很多企业都有自己的网站，但是随着智能手机越来越普遍，市场占有率突飞猛进，网站的移动推广成为企业产品推广必不可少的一部分。大多数企业都拥有了自己的传pc网站，手机占有率的逐渐升高,智能手机成为企业移动推广最重要的平台。提供长期维护。"},
        {color:"#fdad73",ico:"fa-tablet",title:"自适应网站",url:"/test6",content:"整站建设也可以在原来的基础上进行二次开发,需要提供设计稿。现在的H5响应式网站是时间和成本的双重效率，因为它不仅可以节约建设的时间，同时还降低了建站的成本。因为在过去想要实现响应式网站，那就需要针对每一种不同的设备进行网站建设，这是一件费时又费力的事情。但是现在，基于设备的特性以及屏幕分辨率，一个H5响应式网站就可以解决企业建站的问题，实现全网覆盖，转化机会也会随之提高。提供长期维护。"},
        {color:"#edbd9a",ico:"fa-weixin",title:"微信小程序",url:"/test6",content:"小程序自带的附近的小程序功能，帮助商家被五公里范围内的微信用户搜索到，解决当下商家广告无处可打的尴尬。店铺根据距离来排名，与品牌大小无关，也就是说，用户离你越近，你就排得越前。小程序是一种无需下载安装即可使用的应用，能以最低成本触达用户。随着小程序市场的打开，在未来两年内，小程序将有望成为企业及商家的标配。微信开放小程序关键字搜索，提高了企业商家的被搜索到的机会。提供长期维护。"},
        {color:"#fed17d",ico:"fa-weixin",title:"微信公众号",url:"/test6",content:"利用公众账号平台进行自媒体活动，简单来说就是进行一对多的媒体性行为活动，如商家通过申请公众微信服务号通过二次开发展示商家微官网、微会员、微推送、微支付、微活动、微报名、微分享、微名片等，已经形成了一种主流的线上线下微信互动营销方式。运营微信公众号对于品牌宣传来说是一个很好的免费平台，不仅能够大篇幅地宣传自己的产品和企业文化，也可以让更多的人更加了解自己，增加品牌的曝光率。提供长期维护。"},
        {color:"#dfbf1a",ico:"fa-list-alt",title:"活动页面",url:"/test6",content:"严格按照提供的设计稿开发并提供一些优化建议,或者只给出一些想法,剩下的全权由我方设计和开发. 价格优惠可以谈。通过办活动可以带来新用户，活动是拉新的重要手段之一，尤其是用户基础小的新平台新店铺，往往通过这样的方式来吸引大量的客户。通过活动来扩大品牌知名度，和第一种类似，也是为了吸引更多的用户。通过活动可以清理库存，保不准哪款商品滞销了而且马上过期，在库存里每多呆一天就多浪费一天的银子。"},
        {color:"#bee54c",ico:"fa-asl-interpreting",title:"banner设计",url:"/test6",content:"一个网页醒目的可以算是banner了，能形象鲜明的展示所要表达的内容，因为他是醒目的，他具有增强吸引用户的效果，很大部分决定了客户的去留，网站建设banner是广大站长们用来进行网络推广的一个很有效的武器，banner的设计对于网站来说，是很重要的。 从视觉来讲，网站建设banner分为两个部分，一个是文字，另一个是背景图，背景图是作为辅助而存在的，如果只有一个图片，浏览用户很有可能不知道所要表达的意思。"},
        {color:"#9ecf0f",ico:"fa-connectdevelop",title:"PHP网站开发",url:"/test6",content:"全球60%的网站，国内80%的网站都是用php开发，小到企业官网、微官网、大到B2B、B2C电商平台的搭建，都离不开PHP技术。PHP可以应用在LINUX，windows等多种操作系统上，有着很广泛的跨平台使用，PHP不仅在WEB开发领域有着无可撼动的地位，由于PHP自身语言特点及优势，还被广泛用于当前主流的应用场景开发、如：微信小程序、微信公众平台、OA管理系统、APP开发等，深受企业以及程序员的喜爱。"}
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
        //loop:true, //循环的滚动会有写问题
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
    for(var i = 0; i < 6; i++){
      tempCudeBox.push(
        <div key={i} className={`surface  key${i}`}>
          {this.props.cudeBox[i].content} 
        </div>
      );
      tempCudeImg.push(
        <div key={i} className={`surface-in  index${i}`}>
          <img src={`../../img/${i+2}.jpg`} alt="" />
        </div>
      );
    }

    for(var j = 0, len2 = _this.sliderContent.length; j < len2; j++){
      tempSlider.push(
        <div key={j} className="swiper-slide">
          <div className="slideDetial" style={{backgroundColor:_this.sliderContent[j].color}}>
            <Link className="blockLink" to={_this.sliderContent[j].url }>
                <div className="ico">
                  <i className={`fa fa-5x  ${_this.sliderContent[j].ico} `}></i>
                </div>
                <h3 className="subTitle">{_this.sliderContent[j].title}</h3>
                <div className="content">
                  {_this.sliderContent[j].content}
                </div>
            </Link>
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