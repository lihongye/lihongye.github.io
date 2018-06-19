import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/404";
export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      testNumber:'一些数据',
    }
  }

  toggleNav = () => {
    this.setState({testNumber:"lihongye"});
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
    //console.log(Menu);
  }

  componentDidMount(){
    //console.log(Menu);
  }
  render(){
    var MenuArray = [
        {url:"/",content:"首页"},
        {url:"/test",content:"工作"},
        {url:"/about",content:"学习记录"},
        {url:"/topics",content:"学习资料"},
        {url:"/test2",content:"生活随笔"},
        {url:"/test3",content:"个人简历"},
    ];
    var tempMenuArray = [];
    for(var i = 0, len = MenuArray.length; i < len; i++){
      tempMenuArray.push(<li key={i}><NavLink exact={i===0} to={MenuArray[i].url} className="link">{MenuArray[i].content}</NavLink></li>)
    }

    return(
      <Router>
          <div>
              <ul className="menuList">
                {tempMenuArray}
              </ul>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route component={NotFoundPage} />

              </Switch>
          </div>
      </Router>
     
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink to={`${match.url}/rendering`} activeClassName="active">Rendering with React</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/components`} activeClassName="active">Components</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/props-v-state`} activeClassName="active">Props v. State</NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
