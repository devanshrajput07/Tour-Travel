import { Component } from "react";
import "../components/Destination.css";

class DestinationData extends Component {
  render() {
    return (
      <>
        <div className={this.props.cName}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.description}</p>
          </div>
          <div className="des-img">
            <img src={this.props.img1} alt="Mountain1" />
            <img src={this.props.img2} alt="Mountain2" />
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData;
