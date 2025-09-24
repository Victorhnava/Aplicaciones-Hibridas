// index.js
const ProductManager = require('./ProductManager');

// Crear instancia de ProductManager
const manager = new ProductManager();

// Agregar productos
manager.addProduct({ title: "Laptop", description: "Dell Inspiron 15", price: 800 });
manager.addProduct({ title: "Mouse", description: "Mouse inalámbrico", price: 20 });
manager.addProduct({ title: "Teclado", description: "Teclado mecánico", price: 50 });

// Mostrar todos los productos
console.log("Lista de productos:");
console.table(manager.getProducts());

// Buscar producto por ID
console.log("Producto con ID 2:");
console.log(manager.getProductById(2));

// Intentar buscar un producto inexistente
console.log("Producto con ID 99:");
console.log(manager.getProductById(99));
