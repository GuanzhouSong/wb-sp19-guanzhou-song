import {createStore} from "redux";
import ProfileReducer from "../reducers/ProfileReducer";
import {Provider} from "react-redux";
import React from "react";
import ProfileContainer from "./ProfileContainer";

const store = createStore(ProfileReducer);
export default class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  render() {
    return (
        <div>
          <Provider store={store}>
            <ProfileContainer/>
          </Provider>
        </div>
    );
  }
}
