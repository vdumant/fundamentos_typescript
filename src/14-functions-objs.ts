(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password);

  }

  login({ email: 'juan@sample.com', password: 1234 });

  const products: any[] = [];
  const addProduct = (data: { title: string, price?: number }) => {
    products.push(data);
  }

  addProduct({ title: 'Prod1', price: 12 });
  console.log(products);

})()
