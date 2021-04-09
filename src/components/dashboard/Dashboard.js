import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authenticate } from "../../actions/loginInAction";
import Wrapper from "./Wrapper";
import { PATH } from "../../config/routes";
import { logout } from "../../utils/Utility";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showLoading: false,
      hasError: false,
      showLoginError: false,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /**
   * Handles onSubmit Logout
   */
  onClickLogout = () => {
    logout();
    this.props.history.push(PATH.LOGIN);
  };
  /**
   * Renders login screen design
   */
  render() {
    return (
      <Wrapper>
        <>
          <h3>Dashboard</h3>
        </>
      </Wrapper>
    );
  }
}
/**
 * Type of the props used in the component
 */
Dashboard.propTypes = {
  authenticate: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { authenticate })(Dashboard);
