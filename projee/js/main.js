import headerFunc from "./header.js";
import productsFunc from "./products.js";

//! localStorage ürün ekleme
async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");