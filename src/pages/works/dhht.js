import React, { Component } from "react";
export default class Dhht extends Component{
  constructor(props){
    super(props);
    this.state = {
      dhhtList:[
        {
          title:"维修网站",
          url:"http://test.dhhtgroup.com:8092", 
          content:"整站前端页面。产品给到原型后参与到页面的设计工作，并实现前端效果。以及配合开发调用后台的接口。使用datatables完成表格响应式布局的以及异步分页等功能,确保页面在主流浏览器正常显示。 ",
          login:{
            account:"david@pandaclever.es",
            password:"david123"
          }
        },
        {
          title:"oms订单查询系统",
          url:"http://sandbox.tomrepair.es", 
          content:"更新oms整站UI，用bootstrap框架完成响应式, 确保页面在主流浏览器正常显示。部分页面使用前端vue框架，跟后台开发对接口。调试数据。后期参与到新功能的增加(产品给到原型后并根据后台的数据接口完成前端页面，使用layer插件完成弹框以及异步分页。",
          login:{
            account:"lhq",
            password:"lhq123456"
          }
        },
        {
          title:"公司微信公众号开发--丹宏昊天Tomrepair",
          content:"前端结合layerui.js完成页面布局, 到后期公司的公众号没有人维护, 打算以后不开放公众号了。",
        },
        {
          title:"公司magento商城网站",
          url:"http://www.pandawill.com", 
          content:"用magento的多站点功能, 公司开放了法语/西语/葡语和Pandwill四个电商网站, 后面公司转型做维保业务, 电商网站都关掉了。 主要负责活动页面与页面配套的活动邮件以及首页banner轮播。并确保页面兼容主流浏览器以及邮件兼容各种邮件客户端。商城推广部提出活动主题，参与到活动设计，结合推广提出的前端页面展示效果，用前端语言html、js、css、css3等输出html页面并上传到网站。",
          codeList:[
            {
              subTitle:"Pandwill网站",
              active:[
                {info:'春季主题清仓', marker:'pw', search:'20160406',time:"2016-04-06"},
                {info:'蓝牙产品专场', marker:'pw', search:'20160418',time:"2016-04-18"},
                {info:'7周年庆', marker:'pw', search:'20160606',time:"2016-06-06"},
                {info:'father day', marker:'pw', search:'20160617',email:'0',time:"2016-06-17"},
                {info:'公司清仓活动', marker:'pw', search:'20160712',time:"2016-07-12"},
                {info:'清仓第二版', marker:'pw', search:'20160713',email:'0',time:"2016-07-13"},
                {info:'第二轮公司清仓', marker:'pw', search:'20160802',time:"2016-08-02"},
                {info:'APPLE& SUMSUNG 配件清仓', marker:'pw', search:'20160808',email:'0',time:"2016-08-08"},
                {info:'香港仓产品清仓', marker:'pw', search:'20160901',email:'0',time:"2016-09-01"},
                {info:'秋季', marker:'pw', search:'20161027',email:'0',time:"2016-10-27"},
                {info:'双十一', marker:'pw', search:'20161108',time:"2016-11-08"},
                {info:'二手手机和平板', marker:'pw', search:'20161115',email:'0',time:"2016-11-15"},
                {info:'黑色星期五', marker:'pw', search:'20161124',email:'0',time:"2016-11-24"},
                {info:'圣诞节', marker:'pw', search:'20161220',time:"2016-12-20"},
              ]
            },
            {
              subTitle:"法语/西语/葡语网站",
              active:[
                {info:'西仓资金占用产品清仓', marker:'es', search:'20160311',time:"2016-03-11"},
                {info:'父亲节', marker:'es', search:'20160316',time:"2016-03-16"},
                {info:'复活节', marker:'es', search:'20160323',time:"2016-03-23"},
                {info:'春季主题清仓', marker:'es', search:'20160407',email:'0',time:"2016-04-07"},
                {info:'四月节集市', marker:'es', search:'20160413',email:'0',time:"2016-04-13"},
                {info:'米粉节', marker:'es', search:'20160421',email:'0',time:"2016-04-21"},
                {info:'母亲节', marker:'es', search:'20160428',time:"2016-04-28"},
                {info:'iPhone 专题', marker:'es', search:'20160505',time:"2016-05-05"},
                {info:'旅游季', marker:'es', search:'20160519',email:'0',time:"2016-05-19"},
                {info:'2周年庆', marker:'es', search:'20160606',time:"2016-06-01"},
                {info:'小米中西仓', marker:'es', search:'20160613',email:'0',time:"2016-06-13"},
                {info:'翻新机所有产品清仓', marker:'es', search:'20160621',time:"2016-06-21"},
                {info:'EIE', marker:'es', search:'20160622',email:'0',time:"2016-06-22"},
                {info:'年中清仓', marker:'es', search:'20160630',time:"2016-06-30"},
                {info:'公司清仓', marker:'es', search:'20160711',time:"2016-07-11"},
                {info:'奥运会', marker:'es', search:'20160726',time:"2016-07-26"},
                {info:'第二轮公司清仓', marker:'es', search:'20160802',time:"2016-07-29"},
                {info:'小米专题', marker:'es', search:'20160811',time:"2016-08-11"},
                {info:'meizu 专题', marker:'es', search:'20160812',email:'0',time:"2016-08-12"},
                {info:'清仓', marker:'es', search:'20160823',email:'0',time:"2016-08-23"},
                {info:'XIAOMI 单品推荐', marker:'es', search:'20160826',time:"2016-08-26"},
              ]
            },
          ],
        },
      ]
    }
  }
  componentWillUnmount(){
    
  }
  componentDidMount(){
    
  }
  render(){
    var item = this.state.dhhtList, tempList = [];
    for(var i = 0, len = item.length; i < len; i++){
      tempList.push(
        <div key={i} className="contentBox">
          <h2>{item[i].title}</h2>
          { item[i].url ? <a className="link" href={item[i].url} target="__blank">{item[i].url}</a> :'' }
          { item[i].login ? <p className="account"><span>{`账号: ${item[i].login.account}`}</span><span>{`密码: ${item[i].login.password}`}</span></p> : '' }
          <p>{item[i].content}</p>
          {
            item[i].codeList ? item[i].codeList.map((el, index) => {
              return  <div className="activeList" key={index}>
                      <h3>{el.subTitle}</h3>
                      <table className="table reactTable">
                        <thead>
                          <tr><td>主题</td><td>配套html邮件</td><td>时间</td></tr>
                        </thead>
                        <tbody>                        
                      {
                        el.active ? el.active.map((elSecond, index) => {
                          return <tr key={index}>
                              <td><a className="link" href={ `/activePage/hdPage.html?name=${elSecond.search}&marker=${elSecond.marker}`} target="__blank">{ `${elSecond.info}活动` }</a></td>
                              <td>
                                { elSecond.email === "0" ? '' : <a className="link" href={ `/email/${elSecond.marker}-email.html?name=${elSecond.search}` } target="__blank">{`邮件 (${elSecond.time})` }</a>}
                              </td>
                              <td>{ elSecond.time }</td>
                              </tr>
                        }) : ''
                      }
                      </tbody>
                      </table>
                    </div>
            }) : ''
          }
        </div>
      );
    }
    return(
      <div className="mainContent">
        <p>公司之前是做跨境电商的, 名字叫丹宏昊天, 后面公司转型做维保业务,  现在叫汤姆国际售后服务有限公司。 </p>
        {tempList}
      </div>
    );

  }
}