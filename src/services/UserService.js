import React from 'react';

var API_URL = "http://localhost:8080/api/";

class UserService {

  login(user) {
    return fetch(API_URL + "login", {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user),
      method: 'POST'
    })
  }

  getProfile() {
    console.log(window.sessionStorage);
    return fetch(API_URL + "profile", {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST'
    })
  }

  updateProfile(userId, user) {
    return fetch(API_URL + "user/" + userId, {
      method: 'PUT',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  logOut() {
    return fetch(API_URL + "logout", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
  }

  register(user) {
    return fetch(API_URL + "register", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'POST'
    })
  }

}

export default UserService;