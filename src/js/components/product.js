import React from "react";

function Product(props) {
  var product = props.product;
  console.log(product);
  return (
    <div className="product col-6 col-md-3">
      <a href="#" className="product-imageLink">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="img-fluid img-thumbnail product-image"
        />
      </a>
      <a href="#" className="product-link">
        <h5 className="product-name">{product.name}</h5>
      </a>
      <span className="product-price">
        <span className="price-label">Price: </span>
        <span className="price-value">{"$" + product.price}</span>
      </span>
    </div>
  );
}

export default Product;
