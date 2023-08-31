import { Component } from "react";

import userService from "../services/user-service";
import { getProductWithLimit } from "../api/api";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      products: []
    };
  }


  componentDidMount() {
    userService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
    getProductWithLimit(10).then(
      response => {
        this.setState({
          products: response.data
        });
        console.log(response);
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    )
  }

  render() {
    return (
      <div>
        <header>
          <h3>Home</h3>
        </header>
        <div>{this.state.content.map((user, index) => {
          return <p key={index}>{user.username}</p>
        })}</div>
        <div></div>
      </div>
    );
  }
}