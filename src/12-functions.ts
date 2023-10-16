(() => {
  type Sizes = 'S' | 'M' | 'L';
  function createProduct(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProduct(
    'P1', new Date(), 12, 'M'
  );
  console.log(product1);

  const createProductV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

})()
