import UserService from "../services/UserService";

var COURSE_API_URL = "http://localhost:8080/api/";

var userService = new UserService();
const ProfileReducer = (state = {user: []}, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        user: action.user
      };

    default:
      return state;
  }
};

export default ProfileReducer;