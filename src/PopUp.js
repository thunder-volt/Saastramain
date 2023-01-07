import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
        
            <h3>SHAASTRA SALES at shastra.sales.org!</h3>

            <br />
        </div>
      </div>
    );
  }
}