import Axios from "axios";



export default {
    // Gets all productss
    getProducts: function() {
      return Axios.get("/api/products");
    },
    // Gets the products with the given id
    getProduct: function(id) {
      return Axios.get("/api/products/" + id);
    },
    // Deletes the products with the given id
    deleteProduct: function(id) {
      return Axios.delete("/api/products/" + id);
    },
    // Saves a products to the database
    saveProduct: function(productData) {
      return Axios.post("/api/products", productData);
    }
  };
  