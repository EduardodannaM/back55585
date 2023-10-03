class ProductManager {
  constructor() {
    this.products = [];
    this.lastProductId = 0;
  }
  //getNextId = () => {
  //  const count = this.products.length;
  //  if (count === 0) return 1;
  // const position = count - 1;
  // const lastProduct = this.products[position];
  // return lastProduct.id + 1;
}
getProductos = () => {
  {
    return this.products;
  }
};
addProduct = (title, description, price, thumbnail, code, stock) => {
  if (!title || !description || !price || !thumbnail || !code || !stock) {
    console.error("Todos los campos son obligatorios");
    return;
  }
  const codigoUnico = !this.products.some((product) => product.code === code);
  if (!codigoUnico) {
    console.error("El código ya existe en la lista de productos");
    return;
  }
  this.lastProductId += 1;
  //const id = this.getNextId();
  const producto = {
    id,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
  };
  this.products.push(producto);
  console.log("Agregado Correctamente");
  getProductById = (id) => {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Producto no encontrado");
    }
  };
};

const productManager = new ProductManager();
productManager.addProduct(
  "producto prueba",
  "Esto es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
productManager.addProduct(
  "producto prueba 2",
  "Esto es un producto prueba 2",
  200,
  "Sin imagen 2",
  "abc123 2",
  25
);
console.log("Listado de productos", productManager.getProductos());
const product = productManager.getProductById(1);
if (product) {
  console.log("Producto encontrado", product);
}
