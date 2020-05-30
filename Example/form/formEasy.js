// 此範例單純 handleOnChange, handleOnSubmit 在 HOC

import React, { Component } from 'react';


const LoginHOC = (PassedComponent) => {
  return class LoginParent extends Component {
 

    constructor() {
      super();

      this.state = {
        username: '',
        email: '',
        password: ''
      };
      
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount() {
    //   const ifLoggedIn = this.props.checkIfUserLoggedInAction();
    //   if (ifLoggedIn) {
    //     browserHistory.replace({
    //       pathname: '/dashboard'
    //     });
    //   }
    }

    handleOnChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }

    handleOnSubmit(e) {
      e.preventDefault();
      const { username, password } = this.state;
      const data = {
        username,
        password
      };

    //   this.props.doLoginAction(data);
    }

    render() {
      const { username, password, email } = this.state;
      console.log('--> use',username);
      console.log('--> email',email);
      console.log('--> PW',password);
      return (
        <PassedComponent
          username={username}
          password={password}
          email={email}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      )
    }
  }

//   return connect(() => {}, {
//     checkIfUserLoggedInAction,
//     doLoginAction,
//   })(LoginParent)
}

 

const Login = ({ username, password, email, handleOnChange, handleOnSubmit }) => (
  <div className="login-form">
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <input type="text" name="username" id="username" value={username} onChange={handleOnChange} />
      </div>
      <div className="form-group">
        <input type="text" name="email" id="email" value={email} onChange={handleOnChange} />
      </div>
      <div className="form-group">
        <input type="text" name="password" id="password" value={password} onChange={handleOnChange} />
      </div>
      <div className="form-actioon">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
);

export default (LoginHOC(Login));