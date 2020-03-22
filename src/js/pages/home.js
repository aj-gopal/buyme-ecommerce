import React from "react";
import { setNavbarTheme } from "../util.js";

class Home extends React.Component {
  componentDidMount() {
    var currentPage = document.querySelector(".home.container");
    setNavbarTheme(currentPage, 'transparent');
  }

  render() {
    return (
      <div className="home container">
        <div className="row">
          <div className="col col-md-8 col-lg-6">
            <h1>Spring has sprung!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="/products" className="btn btn-primary">
              Shop now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
