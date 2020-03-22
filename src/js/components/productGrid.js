import React from "react";
import Product from "./product";

class ProductsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var products = this.props.products;
    var searchTerm = this.props.searchTerm;
    var category = this.props.category;
    var productsList = [];
    var searchMessage = "";

    products.forEach(function(product) {
      if (
        searchTerm &&
        product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1
      ) {
        return;
      }
      if (
        category &&
        product.category.toLowerCase().indexOf(category.toLowerCase()) === -1
      ) {
        return;
      }
      productsList.push(<Product key={product.id} product={product} />);
    });

    searchMessage =
      productsList < 1
        ? "We've failed you but try a differnet search term!"
        : searchTerm
        ? "Your search for '" +
          searchTerm +
          "' returned " +
          productsList.length +
          " results."
        : "";
    return (
      <React.Fragment>
        <h3 className="category-heading">{category}</h3>
        <h5 className="search-page-alert">{searchMessage}</h5>
        <div className="productsGrid row">{productsList}</div>
      </React.Fragment>
    );
  }
}

export default ProductsGrid;
