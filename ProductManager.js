// ProductManager.js
const fs = require('fs');
const path = require('path');

class ProductManager {
    constructor() {
        this.products = [];
        this.filePath = path.join(__dirname, 'products.json');

        // Si existe el archivo, cargar los productos
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            this.products = JSON.parse(data);
        }
    }

    // Guardar productos en JSON
    saveToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2), 'utf-8');
    }

    // Agregar producto validando campos
    addProduct(product) {
        const { title, description, price } = product;

        if (!title || !description || !price) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        const newProduct = {
            id: this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1,
            title,
            description,
            price
        };

        this.products.push(newProduct);
        this.saveToFile();

        console.log(`Producto agregado con ID: ${newProduct.id}`);
    }

    // Retornar todos los productos
    getProducts() {
        return this.products;
    }

    // Buscar producto por ID
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("Not found");
            return {};
        }
        return product;
    }
}

module.exports = ProductManager;
