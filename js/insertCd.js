import { apiConnect } from "./apiConnect.js";

const form = document.querySelector("[data-form]");

async function insertCd(event) {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  await apiConnect.insertCd(name, price, image);

  location.reload();
}

form.addEventListener("submit", (event) => insertCd(event));
