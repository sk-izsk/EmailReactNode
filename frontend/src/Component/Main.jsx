import React, { Component } from "react";
import Form from "../Component/Form.jsx";

export default class Main extends Component {
  render() {
    return (
      <div class="container">
        <h1 class="brand">
          <span>Zsk </span> Email Test
        </h1>
        <div class="wrapper animated bounceInLeft">
          <div class="company-info">
            <h3>Zsk</h3>
            <ul>
              <li>
                <i class="fa fa-road" /> Montreal, QC, Canada
              </li>
              <li>
                <i class="fa fa-phone" /> (514) 550-7969
              </li>
              <li>
                <i class="fa fa-envelope" /> Test email from Node
              </li>
            </ul>
          </div>
          <div class="contact">
            <h3>Email Service</h3>
            {/* {{ msg }} */}
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
