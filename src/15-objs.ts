(() => {
  type Product = { title: string, price?: number };
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({ title: 'Prod1', price: 12 });
  console.log(products);

})()
