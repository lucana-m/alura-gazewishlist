async function showCds() {
  // const connection = await fetch("http://localhost:3000/cds");
  const connection = await fetch(
    "https://66859952b3f57b06dd4d4528.mockapi.io/wishlist/cds"
  );
  const convertConnection = await connection.json();
  return convertConnection;
}

async function insertCd(name, price, image) {
  const connection = await fetch(
    "https://66859952b3f57b06dd4d4528.mockapi.io/wishlist/cds",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        image: image,
      }),
    }
  );

  const convertConnection = await connection.json();
  return convertConnection;
}

async function deleteCd(id) {
  const connection = await fetch(
    `https://66859952b3f57b06dd4d4528.mockapi.io/wishlist/cds/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const convertConnection = await connection.json();
  location.reload();
  return convertConnection;
}

export const apiConnect = {
  showCds,
  insertCd,
  deleteCd,
};
