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

  componentDidMount() {
    if (localStorage.getItem('userData') !== null) {
      this.setState({
        ...this.state,
        auth: {
          logged: true,
          user: JSON.parse(localStorage.getItem('userData'))
        }
      });
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