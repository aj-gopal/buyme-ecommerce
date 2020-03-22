import React from "react";
import ProductsJSON from "../../products.json";
import productsbg from "../../images/productsbg.jpg";
import { setNavbarTheme, getQueryParams } from "../util.js";
import ProductsGrid from "../components/productGrid";

const products = ProductsJSON.products;

class Products extends React.Component {
  componentDidMount() {
    var currentPage = document.querySelector(".products");
    setNavbarTheme(currentPage, "dark");
  }
  render() {
    var searchTerm = getQueryParams("SearchTerm", window.location.href);
    var category = getQueryParams("Category", window.location.href);

    return (
      <div className="products container-fluid">
        <img className="bg-image" src={productsbg} alt="products background" />
        <h1>Search over a million products..</h1>
        <ProductsGrid products={products} searchTerm={searchTerm} category={category} />
      </div>
    );
  }
}

export default Products;
