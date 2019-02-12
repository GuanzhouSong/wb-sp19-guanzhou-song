import React from 'react'
import {connect} from 'react-redux'
import ProfileComponent from './ProfileComponent'
import UserService from "../services/UserService";

const stateToPropertyMapper = state => ({
  user: state.user
});

var userService = new UserService();

const dispatchToPropertyMapper = dispatch => ({
  getProfile: () =>
      fetch('http://localhost:8080/api/profile')
      .then(response =>
          response.json()
      )
      .then(user => dispatch({
        type: "GET_PROFILE",
        user: user
      }))

});

const ProfileContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ProfileComponent);

export default ProfileContainer