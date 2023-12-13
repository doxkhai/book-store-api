import getUser from "@utils/getUser";
import ProductModel from "@models/products";

class ProductService {
  constructor() {}

  async getProduct() {
    const products = await ProductModel.findAll();
    return products;
  }

  async createProduct() {}
}

export default new ProductService();
