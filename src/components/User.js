import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    currentUser: []
  };

  componentDidMount = async () => {
    const id = this.props.location.state.user;
    const req = await fetch(
      `https://ti-react-test.herokuapp.com/users?q=${id}`
    );
    const res = await req.json();
    // console.log(res[0]);
    this.setState({ currentUser: res[0] });
    // console.log(this.state.currentUser);
  };

  render() {
    const user = this.state.currentUser;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Single User</h1>
        </header>
        <div className="container">
          {this.state.currentUser.length !== 0 && (
            <div className="current-user">
              <h3 className="current-user_name">{user.name}</h3>
              <h4 className="current-user_details">
                Occupation: <span>{user.occupation}</span>
              </h4>
              <p className="current-user_details">
                Email: <span>{user.email}</span>
              </p>
              <p className="current-user_details">
                Bio: <span>{user.bio}</span>
              </p>
              <button className="current-user_button">
                <Link to="/">Back Home</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default User;
