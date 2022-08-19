import React from "react";

import "../../../src/styles/food-card.css";

import { Link } from "react-router-dom";

const FoodCard = (props) => {
  const { id, title, image, price } = props.item;
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{price}</span>
          <button className="addTOCart__btn" >
            <i class="ri-add-circle-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
