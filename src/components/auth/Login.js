import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { PATH } from "../../config/routes";
import { isEmptyString } from "../../utils/Validations";
import { isLoggedIn } from "../../utils/Utility";
import facebookProvider from "./provider";
import socialMediaAuth from "./auth";
//
const regexp = /^\S*$/;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showLoading: false,
      hasError: false,
      showLoginError: false,
      showPassword: false,
    };
  }

  componentDidMount = () => {
    if (isLoggedIn()) {
      this.props.history.push(PATH.BOOK_TEST);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value.trim("") });
  };
  /**
   * Handles onSubmit Login Form
   */
  onClickLogin = () => {
    const { username, password } = this.state;
    this.setState({ showLoginError: false });
    if (
      isEmptyString(username) ||
      isEmptyString(password) ||
      !regexp.test(username) ||
      !regexp.test(password)
    ) {
      this.setState({ hasError: true });
    } else {
      this.setState({ showLoading: true });
    }
  };

  onClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  /**
   * Renders login screen design
   */
  render() {
    return (
      <>
        <h3>Login</h3>
        <button onClick={() => this.onClick(facebookProvider)}>click</button>
      </>
    );
  }
}
/**
 * Type of the props used in the component
 */
Login.propTypes = {
  getAppSettings: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, {})(Login);
