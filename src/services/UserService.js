import React from 'react';

var COURSE_API_URL = "http://localhost:8080/api/";

class UserService {

  getProfile() {
    return fetch(COURSE_API_URL + "profile", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

  }

}

export default UserService;