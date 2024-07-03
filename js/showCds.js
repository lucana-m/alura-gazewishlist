import { apiConnect } from "./apiConnect.js";

const listElement = document.querySelector("[data-list]");

function createCard(id, name, price, image) {
  const card = document.createElement("li");
  card.id = `${id}`;
  card.className = "product_card";
  card.innerHTML = `<img src="${image}" alt="${name}" class="img_cd" />
              <div class="info_box">
                <p class="title_cd">${name}</p>
                <div class="price_box">
                  <p class="price_cd">R$ ${price}</p>
                  <button id="${id}" class="delete_icon" data-delete>
                    <img
                      id="${id}"
                      src="./assets/trash.png"
                      alt="ícone excluir"
                    />
                  </button>
                </div>
              </div>`;

  return card;
}

async function listCds() {
  const apiList = await apiConnect.showCds();
  apiList.forEach((element) =>
    listElement.appendChild(
      createCard(element.id, element.name, element.price, element.image)
    )
  );
}

listCds();
