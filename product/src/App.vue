<script>
import AddProduct from '@/components/AddProduct.vue'
import ShowProduct from '@/components/ShowProduct.vue'
import EditProduct from '@/components/EditProduct.vue'

export default {
  components: {
    AddProduct,
    ShowProduct,
    EditProduct,
  },
  data() {
    return {
      products: [],
      categories: [],
      showAddModal: false,
      showDetailsModal :false,
      selectedProduct: null,
      currentPage:1,
      pageSize:5,
      selectedCategory:'',
      showEditModal: false,
      searchQuery:''
    };
  },
  async created() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products=await response.json();
      this.categories=[...new Set(this.products.map(product=>product.category))];
  
    } catch (error) {
      console.error('error fetching products:', error);
    }
  },
  computed:{
    totalPrice(){
      return this.filteredProducts.reduce((sum,product)=> sum + product.price, 0);
    },
    totalPerPage(){
      return this.paginatedProducts.reduce((sum,product)=> sum + product.price, 0);
    },
    totalPages(){
      return Math.ceil(this.filteredProducts.length / this.pageSize);
    },
    paginatedProducts(){
      const start=(this.currentPage-1)*this.pageSize;
      const end=start+this.pageSize;
      return this.filteredProducts.slice(start,end)
    },
    filteredProducts(){
      let filtered=this.products;
      if(this.selectedCategory){
        filtered=filtered.filter(product=>product.category===this.selectedCategory)
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
    },
    deleteProduct(id){
      if(confirm("do you want to delete this?")){
        this.products=this.products.filter(product=>product.id!=id);
      }
    },
    changePage(page){
      if(page >=1 && page<= this.totalPages){
        this.currentPage = page;
      }
    }
  }
};
</script> 

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
        <label for="categoryfilter">select category to filter</label>
    
      <select v-model="selectedCategory">
          <option value="">select Category</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
     
        <label class="producttitle" for="producttitle">enter title of product to search</label>  
        <input type="text" v-model="searchQuery">
      </div>
        <table class="table table-striped" >
          <thead>
          <tr>
            <th>Id</th>
            <th style="width: 300px">Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th style="width: 250px">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in paginatedProducts" :key="product.id">
          
            <td>{{(currentPage-1)*pageSize+index+1 }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <img :src="product.image" alt="product image" style="width: 50px; height: 50px;" />
            </td>
            <td>{{ product.category }}</td>
            <td id="button">
              <button style="margin: 3px" @click="showProduct(product)" class="btn btn-outline-info">Show</button>
              <button style="margin: 3px" @click="editProduct(product)" class="btn btn-outline-info">Edit</button>
              <button style="margin: 3px" @click="deleteProduct(product.id)" class="btn btn-outline-info">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div style="display: flex">
          <h5>total product: {{ products.length }}</h5>
          <h5 style="margin-left: 350px">total price: {{ totalPrice.toFixed(2) }}</h5>
          <h5 style="margin-left: 200px;">total price per page:{{ totalPerPage.toFixed(2) }}</h5>
        </div>
       
          <ul class="parent-class">
            <ul>
              <button class="btn btn-outline-secondary" @click="changePage(currentPage-1)"> < </button>
            </ul>
            <ul
            v-for="page in totalPages"
            :key="page"
            >
            <button class="btn btn-outline-secondary" @click="changePage(page)">{{ page }}</button>
            </ul>
            <ul>
              <button class="btn btn-outline-secondary" @click="changePage(currentPage+1)"> > </button>
            </ul>
          </ul>
     
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
<style>
.parent-class{
  display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin-left: 350px; 
}
.option-parent{
  margin-left: 329px;
}
.categoryfilter{
  margin-left: 870px;
}
.producttitle{
  margin-left:387px
}
</style>  