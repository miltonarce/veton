import React, {Component, createContext} from "react";

//Create context for VetonApp
export const AppContext = createContext();

//Provider Class for handle context...
class AppProvider extends Component {
  state = {
    auth: {
      logged: false,
      user: {},
    },
    login: val => {
      const {state} = this;
      this.setState({...state, auth: val});
    },
  };

  componentDidMount() {
    const {state} = this;

    if (localStorage.getItem("userData") !== null) {
      this.setState({
        ...state,
        auth: {
          logged: true,
          user: JSON.parse(localStorage.getItem("userData")),
        },
      });
    }
  }

  render() {
    const {children} = this.props;
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    );
  }
}

export default AppProvider;