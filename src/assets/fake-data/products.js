// all images imported from images directory
import Chicken_01 from "../images/Chicken_01.jpg";
import Chicken_02 from "../images/Chicken_02.jpg";
import Chicken_03 from "../images/Chicken_03.jpg";
import Chicken_04 from "../images/Chicken_04.jpg";

import Nuoc_01 from "../images/Nuoc_01.jpg";
import Nuoc_02 from "../images/Nuoc_02.jpg";
import Nuoc_03 from "../images/Nuoc_03.jpg";
import Nuoc_04 from "../images/Nuoc_04.jpg";
import Nuoc_05 from "../images/Nuoc_05.jpg";
import Nuoc_06 from "../images/Nuoc_06.jpg";
import Nuoc_07 from "../images/Nuoc_07.jpg";
import Nuoc_08 from "../images/Nuoc_08.jpg";

import pasta_01 from "../images/pasta_01.jpg";
import pasta_02 from "../images/pasta_02.jpg";
import pasta_03 from "../images/pasta_03.jpg";

import Pizza_01 from "../images/Pizza_01.jpg";
import Pizza_02 from "../images/Pizza_02.jpg";
import Pizza_03 from "../images/Pizza_03.jpg";
import Pizza_04 from "../images/Pizza_04.jpg";
import Pizza_05 from "../images/Pizza_05.jpg";
import Pizza_06 from "../images/Pizza_06.jpg";
import Pizza_07 from "../images/Pizza_07.jpg";
import Pizza_08 from "../images/Pizza_08.jpg";
import Pizza_09 from "../images/Pizza_09.jpg";

const products = [
  {
    id: "01",
    title: "PIZZA BÒ - TÔM - MỰC",
    price: 99000,
    image: Pizza_01,
    category: "Pizza",

    desc: "Xốt Cà Chua, Xốt Phô Mai, Phô Mai Mozzarella, Tôm, Thịt Bò Mexico, Cà Chua, Hành Tây.",
  },

  {
    id: "02",
    title: "PIZZA BÁNH XÈO NHẬT ",
    price: 99000,
    image: Pizza_02,
    category: "Pizza",

    desc: "Xốt Mayonnaise, Xốt Teriyaki, Phô Mai Mozzarella, Bạch Tuộc, Tôm, Bắp Cải, Bột Rong Biển, Vẩy Cá Ngừ Bào.",
  },

  {
    id: "03",
    title: "PIZZA THẬP CẨM THƯỢNG HẠNG",
    price: 99000,
    image: Pizza_03,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Xúc Xích Pepperoni, Thịt Dăm Bông, Xúc Xich Ý, Thịt Bò Viên, Ớt Chuông Xanh, Nấm Mỡ, Hành Tây, Ô-liu.",
  },

  {
    id: "04",
    title: "PIZZA HẢI SẢN XỐT MAYONNAISE",
    price: 99000,
    image: Pizza_04,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "05",
    title: "PIZZA HẢI SẢN XỐT MAYONNAISE",
    price: 99000,
    image: Pizza_05,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "06",
    title: "PIZZA HẢI SẢN XỐT MAYONNAISE",
    price: 99000,
    image: Pizza_06,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "07",
    title: "PIZZA HẢI SẢN XỐT MAYONNAISE",
    price: 99000,
    image: Pizza_07,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "08",
    title: "PIZZA HẢI SẢN XỐT MAYONNAISE",
    price: "99,000đ",
    image: Pizza_08,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "09",
    title: "PIZZA HẢI SẢN XỐT MAYONNAISE",
    price: 99000,
    image: Pizza_09,
    category: "Pizza",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "10",
    title: "Chicken_01",
    price: 99000,
    image: Chicken_01,
    category: "Gà rán",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "11",
    title: "Chicken_02",
    price: 99000,
    image: Chicken_02,
    category: "Gà rán",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "12",
    title: "Chicken_03",
    price: 99000,
    image: Chicken_03,
    category: "Gà rán",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "13",
    title: "Chicken_04",
    price: 99000,
    image: Chicken_04,
    category: "Gà rán",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "14",
    title: "pasta_01",
    price: 99000,
    image: pasta_01,
    category: "Pasta",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "15",
    title: "pasta_02",
    price: 99000,
    image: pasta_02,
    category: "Pasta",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "16",
    title: "pasta_03",
    price: 99000,
    image: pasta_03,
    category: "Pasta",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "17",
    title: "CHAI SPRITE 1.85L",
    price: "39,000",
    image: Nuoc_01,
    category: "Nước uống",

    desc: "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.",
  },

  {
    id: "18",
    title: "CHAI COCA-COLA 1.5L",
    price: "39,000",
    image: Nuoc_02,
    category: "Nước uống",
  },

  {
    id: "19",
    title: "CHAI FANTA 1.5L",
    price: 99000,
    image: Nuoc_03,
    category: "Nước uống",
  },

  {
    id: "20",
    title: "LON COCA-COLA ZERO 320ML",
    price: 99000,
    image: Nuoc_04,
    category: "Nước uống",
  },

  {
    id: "21",
    title: "CHAI COCA-COLA 390ML",
    price: 20000,
    image: Nuoc_05,
    category: "Nước uống",
  },

  {
    id: "22",
    title: "CHAI FANTA 390ML",
    price: 99000,
    image: Nuoc_06,
    category: "Nước uống",
  },

  {
    id: "23",
    title: "CHAI SPRITE 390ML",
    price: 99000,
    image: Nuoc_07,
    category: "Nước uống",
  },

  {
    id: "24",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",
  },

  {
    id: "25",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",
  },

  {
    id: "26",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",
  },

  {
    id: "27",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",
  },

  {
    id: "28",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",
  },

  {
    id: "29",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",
  },

  {
    id: "30",
    title: "NƯỚC SUỐI DASANI 500ML",
    price: "99,000đ",
    image: Nuoc_08,
    category: "Nước uống",

  },

];

export default products;



