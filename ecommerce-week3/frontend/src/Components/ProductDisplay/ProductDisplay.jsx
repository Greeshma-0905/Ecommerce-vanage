import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const renderAdditionalDetails = () => {
    switch (product.category?.toLowerCase()) {
      case "books":
        return (
          <div className="productdisplay-extra">
            <h2>Thrift Book Details</h2>
            <p><strong>Author:</strong> {product.author}</p>
            <p><strong>Condition:</strong> {product.condition}</p>
            <p><strong>Edition:</strong> {product.edition}</p>
          </div>
        );
      case "canvas":
        return (
          <div className="productdisplay-extra">
            <h2>Custom Canvas Details</h2>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Size Options:</strong> {product.sizes?.join(", ")}</p>
            <p><strong>Customization:</strong> {product.customizable ? "Available" : "Not Available"}</p>
          </div>
        );
      case "accessories":
        return (
          <div className="productdisplay-extra">
            <h2>Accessory Info</h2>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Type:</strong> {product.type}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={backend_url + product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{currency}{product.old_price}</div>
          <div className="productdisplay-right-price-new">{currency}{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>

        {/* Conditional size selector only for clothing */}
        {product.category?.toLowerCase() === "clothes" && (
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
        )}

        {renderAdditionalDetails()}

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

        <p className="productdisplay-right-category"><span>Category :</span> {product.category}</p>
        <p className="productdisplay-right-category"><span>Tags :</span> {product.tags?.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
