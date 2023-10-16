(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, 'hola', true];
  prices.push(8);
  console.log(prices);

  let products: (number | string | boolean | Object)[] = ['product 1'];
  products.push({});
  products.push([]);
  console.log(products);

  let numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.map(item => item * 2);
})()
