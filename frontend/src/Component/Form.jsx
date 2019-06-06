import React, { Component } from "react";
import Input from "../Component/Input.jsx";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      occupation: "",
      email: "",
      phone: "",
      message: ""
    };
  }
  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handleOccupation = event => {
    this.setState({ company: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handlePhone = event => {
    this.setState({ phone: event.target.value });
  };
  handleMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    console.log("state", this.state);
    event.preventDefault();
    let data = new FormData();
    data.append("name", this.state.name);
    data.append("occupation", this.state.occupation);
    data.append("email", this.state.email);
    data.append("phone", this.state.phone);
    data.append("message", this.state.message);
    fetch("http://localhost:4000/send", {
      method: "POST",
      body: data
    });
  };
  render() {
    return (
      <div>
        <form method="POST" action="send" onSubmit={this.handleSubmit}>
          <Input
            name="Name"
            type="text"
            nameIp="name"
            onChange={this.handleName}
          />
          <Input
            name="Occupation"
            type="text"
            nameIp="company"
            onChange={this.handleCompany}
          />
          <Input
            name="Email Address"
            type="email"
            nameIp="email"
            onChange={this.handleEmail}
          />
          <Input
            name="Phone Number"
            type="text"
            nameIp="phone"
            onChange={this.handlePhone}
            required
          />

          <p class="full">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              onChange={this.handleMessage}
              required
            />
          </p>
          <p class="full">
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
