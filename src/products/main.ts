import { addProduct, products } from './product.service';

addProduct({ title: 'Prod1', price: 12 });
console.log(products);
