import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  getCategory(e) {
    e.preventDefault();
    var target = e.target;
    var category = target && target.dataset.category;
    this.props.history.push("/products/?Category=" + category);
    window.scrollTo(0, 0);
  }

  handleSearch(e) {
    e.preventDefault();
    var searchInput = e.target.querySelector(".search-input");
    var searchTerm = searchInput && searchInput.value;
    this.props.history.push("/products/?SearchTerm=" + searchTerm);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <a className="navbar-brand d-lg-none" href="/home">
            Buy{" "}
            <span aria-label="lol" role="img">
              ⚡
            </span>{" "}
            Me
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mt-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="notactive"
                  to="/products"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  onClick={this.getCategory}
                >
                  <NavLink
                    activeClassName=""
                    to="/products"
                    className="dropdown-item"
                    data-category="Shirts"
                  >
                    Shirts
                  </NavLink>
                  <NavLink
                    activeClassName=""
                    to="/products"
                    className="dropdown-item"
                    data-category="Accessories"
                  >
                    Accessories
                  </NavLink>
                  <NavLink
                    activeClassName=""
                    to="/products"
                    data-category="Shoes"
                    className="dropdown-item"
                  >
                    Shoes
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/products"
                  className="nav-link"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/cart"
                  className="nav-link"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
            <form
              onSubmit={this.handleSearch}
              className="form-inline my-2 my-lg-0"
            >
              <input
                className="form-control mr-sm-2 search-input"
                type="text"
                placeholder="Search"
              />
              <button className="btn my-0" type="submit"></button>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
