
const storeURL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  let res = await fetch(storeURL);
  let data = res.json();
  console.log(data);
  return data;
}

export const getProductWithLimit = async (limit) => {
  let res = await fetch(storeURL + `?limit=${limit}`);
  let data = res.json();
  return data;
}