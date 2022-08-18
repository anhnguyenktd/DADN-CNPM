import React, { useState, useEffect } from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import Category from "../components/Category/Category.js";

import "../styles/home.css";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/pizza.png";
import foodCategoryImg02 from "../assets/images/chicken.png";
import foodCategoryImg03 from "../assets/images/pasta.jpg";

import FoodCard from "../components/Food-card/FoodCard"



const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CHICKEN") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chicken"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Pasta") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pasta"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <section>
    <Container>
      <Row>
        {/* Giao dien danh sach thuc don */}
        <Col lg="9" md="4" sm="6">
          <Col lg="12">
            <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button
                className={`all__btn  ${
                  category === "ALL" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "PIZZA" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("PIZZA")}
              >
                <img src={foodCategoryImg01} alt="" />
                Pizza
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "CHICKEN" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("CHICKEN")}
              >
                <img src={foodCategoryImg02} alt="" />
                Chicken
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "PASTA" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("PASTA")}
              >
                <img src={foodCategoryImg03} alt="" />
                Pasta
              </button>

            </div>
          </Col>

          <Row>
            {allProducts.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-4">
              <FoodCard item={item} />
            </Col>
            ))}
          </Row>
        </Col>

        {/* Giao dien gio hang */}
        <Col lg="3" md="4" sm="6">
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Home;
