<template>
  <div class="container mt-5" style="width: max-content">
    <h2 class="text-center mt-5 mb-3">Products Listing</h2>
    <div class="card" style="width: 1200px">
      <div class="card-header">
        <button @click="showAddModal = true" class="btn btn-outline-primary">
          Add New Product
        </button>
      </div>
      <br>
      <div>
        <label for="categoryfilter">Select category to filter:</label>
        <select v-model="selectedCategory">
          <option value="">Select Category</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <label class="producttitle" for="producttitle">Enter title of product to search:</label>
        <input type="text" v-model="searchQuery">
      </div>

      <ProductList 
      :products="filteredProducts"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :paginatedProducts="paginatedProducts"
      @edit-product="editProduct"
      @update-product="updateProduct"
      @show-product="showProduct"
      @delete-product="deleteProduct"
      />
      
      <div style="display: flex">
        <h5>Total products: {{ products.length }}</h5>
        <h5 style="margin-left: 350px">Total price: {{ totalPrice.toFixed(2) }}</h5>
        <h5 style="margin-left: 200px;">Total price per page: {{ totalPerPage.toFixed(2) }}</h5>
      </div> 

      <ul class="parent-class">
        <button class="btn btn-outline-secondary" @click="changePage(currentPage - 1)"> < </button>
        <ul v-for="page in totalPages" :key="page">
          <button style="padding-right: 10px;" class="btn btn-outline-secondary" @click="changePage(page)">{{ page }}</button>
        </ul>
        <button class="btn btn-outline-secondary" @click="changePage(currentPage + 1)"> > </button>
      </ul>
    </div>

    <AddData
      :showModal="showAddModal"
      @close="showAddModal = false"
      @add-product="addProduct"
    />
    <EditData
      :showEditModal="showEditModal"
      :product="selectedProduct"
      :categories="categories"
      @update-product="updateProduct"
      @close="showEditModal=false" 
    />
    <ShowData
      :showDetailsModal="showDetailsModal"
      :product="selectedProduct"
      @close="showDetailsModal = false"
    />
  </div> 
</template>

<script>
import AddData from './components/products/Add/AddData.vue';
import EditData from './components/products/Edit/EditData.vue';
import ShowData from './components/products/Show/ShowData.vue';
import ProductList from './components/products/List/ProductList.vue';

export default {
  components: {
    AddData,
    EditData,
    ShowData,
    ProductList
  },
  data() {
    return {
      products: [],
      categories: [],
      showAddModal: false,
      showDetailsModal: false,
      showEditModal: false,
      selectedProduct: null,
      currentPage: 1,
      pageSize: 5,
      selectedCategory: '',  
      searchQuery: ''
    };
  },
  async created() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products = await response.json();
      this.categories = [...new Set(this.products.map(product => product.category))];
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  computed: {
    totalPrice() {
      return this.filteredProducts.reduce((sum, product) => sum + product.price, 0);
    },
    totalPerPage() {
      return this.paginatedProducts.reduce((sum, product) => sum + product.price, 0);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.pageSize);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredProducts.slice(start, end);
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }
      if (this.searchQuery) {
        filtered = filtered.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      return filtered;
    }
  },
  methods: {
    addProduct(newProduct) {
      this.products.unshift({ id: Date.now(), ...newProduct });
      if (!this.categories.includes(newProduct.category)) {
        this.categories.push(newProduct.category);
      }
      this.showAddModal = false;
      this.currentPage = 1;
    },
    showProduct(product) {
      this.selectedProduct = product;
      this.showDetailsModal = true;
    },
    editProduct(product){
      this.selectedProduct = { ...product };
      this.showEditModal = true;
    },
    updateProduct(updatedProduct){
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if(index !== -1){
        this.products.splice(index,1,updatedProduct);
      }
      this.showEditModal = false;
    },
    deleteProduct(id) {
      if (confirm("Do you want to delete this?")) {
        this.products = this.products.filter(product => product.id !== id);
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>

<style scoped>
.parent-class {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin-left: 350px;
}
.producttitle{
  margin-left: 369px;
}
</style>
