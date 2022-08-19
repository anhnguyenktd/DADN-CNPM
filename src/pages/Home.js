import React, { useState, useEffect } from "react";

import { Container, Row, Col} from "reactstrap";


import "../styles/home.css";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/pizza.png";
import foodCategoryImg02 from "../assets/images/chicken.png";
import foodCategoryImg03 from "../assets/images/pasta.jpg";
import foodCategoryImg04 from "../assets/images/drink.jpg";

import FoodCard from "../components/Food-card/FoodCard"

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

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
        (item) => item.category === "Gà rán"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PASTA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pasta"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "NƯỚC UỐNG") {
      const filteredProducts = products.filter(
        (item) => item.category === "Nước uống"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <section>
    <Container>
      <Row>
        {/* Giao dien danh sach thuc don */}
        <Col lg="12" className="text-center mb-5 ">
          <Col lg="12">
            <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button
                className={`all__btn  ${
                  category === "ALL" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("ALL")}
              >
                Tất cả
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
                Gà rán
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

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "NƯỚC UỐNG" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("NƯỚC UỐNG")}
              >
                <img src={foodCategoryImg04} alt="" />
                Nước uống
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
      </Row>
    </Container>
  </section>
  );
};

export default Home;
