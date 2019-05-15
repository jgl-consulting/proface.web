import { PRODUCTS_ENDPOINT } from '@/util/endpoints';
import { PRODUCT_LINES_ENDPOINT } from '@/util/endpoints';
export default class ProductsService {
  constructor({ $axios }) {
    this.$axios = $axios;
  }

  async listProducts(page, size, sortBy, direction) {
    const products = await this.$axios.$get(PRODUCTS_ENDPOINT, {
      params: { page, size, sort: sortBy ? `${sortBy},${direction}`: sortBy}
    });
    
    const extract = (product) => ({
      ...product
    });

    return { 
      products: products.content.map(extract),
      page:  { 
        totalElements: products.totalElements,
        totalPages: products.totalPages,
        page: products.page,
        size: products.size,
        isSorted: products.isSorted
      }
    }
  }

  listProductLines() {
    return this.$axios.$get(`${PRODUCT_LINES_ENDPOINT}/unpaged`);
  }

  getProductById(productId) {
    return this.$axios.$get(`${PRODUCTS_ENDPOINT}/${productId}`);
  } 

  async createProduct(product) {
    await this.$axios.$post(PRODUCTS_ENDPOINT, product);
  }

  async updateProduct(product) {
    const { id } = product;
    await this.$axios.$put(`${PRODUCTS_ENDPOINT}/${id}`, product);
  }

  async deleteProduct({ id }) {
    await this.$axios.$delete(`${PRODUCTS_ENDPOINT}/${id}`);
  }

}