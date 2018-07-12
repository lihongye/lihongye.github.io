import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';
import Choice from "./works/choice";
import Dhht from "./works/dhht";
export default class Works extends Component{
  constructor(props){
    super(props);
    this.state = {
      secondMenu:[
        {url:"",title:"丹宏昊天",time:"2016-03 -- 至今"},
        {url:"/hksj",title:"惠卡世纪",time:"2015-09 -- 2016-02-28"},
        {url:"/lkxx",title:"洛酷信息",time:"2014-07 -- 2016-09"},
        {url:"/dssx",title:"大四实习",time:"2013-02-20 -- 2014-07"},
      ]
    }
  }
  render(){
    var url = this.props.match.url, temItem = this.state.secondMenu, tempSecondMenu = [];
    for(var i = 0, len = temItem.length; i < len; i++){
      tempSecondMenu.push(
        <li key={i}>
          <NavLink exact={i===0} to={ url + temItem[i].url} className="secondLink">
            <span className="title">{temItem[i].title}</span>
            <span className="font">web前端开发</span>
            <span className="font">{temItem[i].time}</span>
            <i className="ico"></i>
          </NavLink>
        </li>
      )
    }
    return(
      <div className="works main">
        <ul className="siderList">
            {tempSecondMenu}
          </ul>
          <Route path={`${url}/:topicId`} component={Choice}/>
          <Route exact path={url} component={Dhht} />
      </div>
    );

  }
}