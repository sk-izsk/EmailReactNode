import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <p>
          <label>{this.props.name}</label>
          <input
            type={this.props.type}
            name={this.props.nameIp}
            onChange={this.props.onChange}
            required
          />
        </p>
      </div>
    );
  }
}
