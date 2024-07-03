import { apiConnect } from "./apiConnect.js";

async function deleteCdButton() {
  const apiList = await apiConnect.showCds();

  if (apiList.length) {
    const deleteButtons = document.querySelectorAll("[data-delete]");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => apiConnect.deleteCd(e.target.id));
    });
  }
}

deleteCdButton();
