class Product {
  constructor(id, { name, description, price, soldout, stores, inventroy }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.inventroy = inventroy;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

export const resolvers = {
  getProducts: ({ id }) => {
    console.log(productDatabase);
    return new Product(id, productDatabase[id]);
  },
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    productDatabase[id] = input;
    return new Product(id, input);
  },
};
