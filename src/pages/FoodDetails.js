import React, { useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/food-details.css";

import FoodCard from "../components/Food-card/FoodCard";

const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const { title, price, category, desc, image } = product;
  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">              
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={image} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Giá: <span>{price} VNĐ</span>
                </p>
                <p >
                  <strong>Mô tả:</strong> <span>{desc}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Thêm vào giỏ hàng
                </button>

              </div>
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <FoodCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default FoodDetails;
