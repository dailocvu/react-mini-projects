import React from "react";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errMessage: "" };
  // }
  state = { lat: null, errMessage: "" }; //Babel convert to constructor

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage} </div>;
    } else if (!this.state.errMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else {
      return <Loader message="Please accept location request..." />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default App;
