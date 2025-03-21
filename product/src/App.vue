 <script>
import AddProduct from '@/components/AddProduct.vue'
import ShowProduct from '@/components/ShowProduct.vue'
import EditProduct from '@/components/EditProduct.vue'

export default {
  components: {
    AddProduct,
    ShowProduct,
    EditProduct
  },
  data() {
    return {
      products: [],
      categories: [],
      showAddModal: false,
      showDetailsModal :false,
      selectedProduct: null,
      currentPage: 1,
      pageSize: 20,
      selectedCategory: '',
      showEditModal: false,
  
    };
  },
  async created() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products = await response.json();

      this.categories = [ ...new Set(this.products.map(product => product.category))]
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  computed:{
    paginatedProducts(){
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredProducts.slice(start, end);
    },
    filteredProducts(){
      let filtered=this.products;
      if(this.selectedCategory){
        filtered=filtered.filter(product=>product.category == this.selectedCategory)
      }
      if(this.searchQuery){
        filtered=filtered.filter(product=>product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
      return filtered;
    }
  },
  methods: {
    addProduct(newProduct){
      this.products.unshift({id: Date.now(), ...newProduct});

      if(!this.categories.includes(newProduct.category)){
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
    }
  }
};
</script> 
<template>
  <div class="container mt-5" style="width: max-content">
    <h2 class="text-center mt-5 mb-3">Product Listing</h2>
    <div class="card" style="width: 1200px">
      <div class="card-header">
        <button @click="showAddModal = true" class="btn btn-outline-primary">
          Add New Product
        </button>
      </div>

<!-- <select v-model="selectedCategory" style="margin-left:500 ;">
  <option value="">select category</option>
  <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
</select> -->

</div>
      <div class="card-body">
        <table class="table table-bordered table-striped" border="1">
          <thead>
          <tr>
            <th>Sr No</th>
            <th style="width: 300px">Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <!-- <th>description</th> -->
            <th style="width: 250px">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in paginatedProducts" :key="product.id">
            <!-- <td>{{ (currentPage - 1) * pageSize + index + 1}}</td>  -->
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <img :src="product.image" alt="Product Image" style="width: 50px; height: 50px;" />
            </td>
            <td>{{ product.category }}</td>
            <td id="button">
              <button style="margin: 3px" @click="showProduct(product)" class="btn btn-outline-info">Show</button>
              <button style="margin: 3px" @click="editProduct(product)" class="btn btn-outline-info">Edit</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <AddProduct 
      :showModal="showAddModal"
      @add-product="addProduct"
      @close="showAddModal = false"
      />
      <ShowProduct
:showDetailsModal="showDetailsModal"
:product="selectedProduct"
@close="showDetailsModal = false"
/>
<EditProduct
:showEditModal="showEditModal"
:product="selectedProduct"
:categories="categories"
@update-product="updateProduct"
@close="showEditModal=false" 
/>

    </div>

</template>



