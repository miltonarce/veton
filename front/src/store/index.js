import React, { Component, createContext } from "react";

export const AppContext = createContext();

class AppProvider extends Component {
  state = {
    auth: {
      logged: false,
      user: {}
    },
    login: val => {
      this.setState({ ...this.state, auth: val });
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;