import axios from 'axios';
// importo una api de productos con axios

export async function productsData(){
  // consumo la api asincronicamente
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;
}