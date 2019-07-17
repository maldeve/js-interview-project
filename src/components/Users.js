import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import { Link } from "react-router-dom";

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  deleteUser = () => {
    console.log("User deleted!");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.users.map(user => {
            return (
              <div
                key={user.id}
                className="col-md-4"
                style={{ marginBottom: "2rem" }}
              >
                <div className="info_box">
                  <div className="info_text">
                    <h4 className="info_title">{user.name}</h4>
                    <p className="info_subtitle">
                      Occupation: <span>{user.occupation}</span>
                    </p>
                    <p className="info_subtitle">
                      Email: <span>{user.email}</span>
                    </p>
                    <p className="info_subtitle">
                      Bio:{" "}
                      {user.bio.length < 20
                        ? `${user.bio}`
                        : `${user.bio.substring(0, 25)}...`}
                    </p>
                  </div>
                  <button className="info_button">
                    <Link
                      to={{
                        pathname: `/user/${user.id}`,
                        state: { user: user.name }
                      }}
                    >
                      View
                    </Link>
                  </button>
                  <button className="info_button" onClick={this.deleteUser}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.allusers
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
