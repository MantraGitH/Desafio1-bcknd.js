class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1; // Esto sirve para poder llevar un seguimiento de los ids autoincrementabless
    }
  
    // esto seria un metodo para agregar un nuevo producto
    addProduct(title, description, price, stock) {
      // para validar que todos los campos sean obligatorios
      if (!title || !description || !price || !stock) {
        console.log("Todos los campos son obligatorios.");
        return;
      }
  
      // para validar que no se repita el campo "code"
      if (this.products.some(product => product.code === this.nextId)) {
        console.log("El código ya está siendo utilizado");
        return;
      }
  
      const product = {
        id: this.nextId,
        title,
        description,
        price,
        code: this.nextId, // se utiliza el id como codigo identificador
        stock,
      };
      
      this.products.push(product);
      this.nextId++; //  para incrementar el id para el sig. producto
    }
  
    // para obtener todos los productos
    getProducts() {
      return this.products;
    }
  
    // para obtener un producto por su idd
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado");
      }
    }
  }
  
  // ej123
  const productManager = new ProductManager();
  
  // Agregar los productos
  productManager.addProduct("Camiseta", "Camiseta de algodón", 20, 50);
  productManager.addProduct("Pantalón", "Pantalón vaquero", 25, 30);
  
  // para listar los productos
  console.log("Lista de productos:");
  console.log(productManager.getProducts());
  
  // obtener el producto por su id
  const product = productManager.getProductById(1);
  console.log("Producto por ID:");
  console.log(product);
  
  //  cuando se intentamos agregar un producto con el mismo codigo
  productManager.addProduct("Zapatos", "Zapatos deportivos", 50, 20);
  
  // para listar productos nuevamente
  console.log("Lista de productos después de agregar uno con código repetido:");
  console.log(productManager.getProducts());