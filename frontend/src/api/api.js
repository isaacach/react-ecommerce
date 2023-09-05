
const storeURL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  let res = await fetch(storeURL);
  let data = await res.json();
  console.log(data);
  return data;
}

export const getProductWithLimit = async (limit) => {
  let res = await fetch(storeURL + `?limit=${limit}`);
  let data = res.json();
  return data;
}

export const getProductWithCategory = async (category) => {
  let res = await fetch(storeURL + `/category/${category}`);
  let data = await res.json();
  return data;
}