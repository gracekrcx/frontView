// loading + 呼叫 api

import React, { Component } from "react";
import {Loader} from '../styled/commonStyled'

const FeedItem = ({ contacts }) => {
    return (
        <div className="col-sm-4 offset-4">
        {contacts.map(contact => (
            <div className="row p-2" key={contact.email}>
            <div className="col-sm-2">
                <img
                className="rounded-circle"
                src={contact.thumbnail}
                role="presentation"
                />
            </div>
            <div className="feedData col-sm-9">
                <strong>{contact.name}</strong>
                <br />
                <small>{contact.email}</small>
            </div>
            </div>
        ))}
        </div>
    );
};

const isEmpty = prop =>{
    console.log('isEmpty', prop);

    return prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty("length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0);
}
  
// HOC 
const Loading = loadingProp => WrappedComponent => {
  return class LoadingHOC extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
      console.log('--1 > ',this.props); // { contacts:[]}
    }

    componentDidUpdate(nextProps) {
      // 直接在 componentDidUpdate 偵測 nextProps 是不是已經把 contacts update 了
      if (!isEmpty(nextProps[loadingProp])) {
        this.endTimer = Date.now();
      }
    }

    // setState 就會重新 rerender
    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };
      console.log('-- 拿到資料 ->',this.props[loadingProp]);
      return isEmpty(this.props[loadingProp]) ? (
        <Loader />
      ) : (
        <WrappedComponent {...this.props} {...myProps} />
      );
    }
  };
};

// 純 Presentational components
const Feed = (props)=>{
      const { loadingTime } = props;
      return (
        <div className="feed">
          <FeedItem contacts={props.contacts} />
          <p>Loading time {loadingTime} seconds</p>
        </div>
      );
}
// loading HOC
const FeedHod = Loading("contacts")(Feed);

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
      // 呼叫 APi
      setTimeout(()=>{
        fetch("https://api.randomuser.me/?results=5")
        .then(response => response.json())
        .then(parsedResponse =>
            parsedResponse.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            thumbnail: user.picture.thumbnail
            }))
        )
        .then(contacts => this.setState({ contacts }));
      },7000)
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:'#fff'}}>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOC Demo app
              </a>
            </li>
          </ul>
        </nav>
        {/* 
          這個 component 加上 loading HOC 
          api 呼叫得到的 data 透過 contacts 傳給 compoent 
          */}
        <FeedHod contacts={this.state.contacts} /> 
      </div>
    );
  }
}

export default App;