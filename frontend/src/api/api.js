
const storeURL = 'https://api.storerestapi.com/products';

export const getAllProducts = async () => {
  let res = await fetch(storeURL);
  let data = res.json();
  console.log(data);
}

export const getProductWithLimit = async (limit, page) => {
  let res = await fetch(storeURL + `?limit=${limit}&page=${page}`);
  let data = res.json();
  console.log(data);
}