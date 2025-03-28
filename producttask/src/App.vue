<script>
import AddProduct from './components/AddProduct.vue';
import ShowProduct from './components/ShowProduct.vue';
import EditProduct from './components/EditProduct.vue';

export default{
  components:{
    AddProduct,
    ShowProduct,  
    EditProduct
  },
  data(){
    return {
      products:[],
      categories:[],
      currentPage:1,
      pageSize:5,
      selectedCategory:'',
      searchQuery:'',
      searchDescription:'',
      selectedProduct:null,
      showAddModal: false,
      showDetailsModal:false,
      showEditModal:false,
      sortBy:'',
      orderBy:''
    };
  }
,
  async created(){
    try {
    const response = await fetch('https://fakestoreapi.com/products');
    this.products = await response.json();
    this.categories=[ ...new Set(this.products.map(product =>product.category))]
  } catch (error) {
    console.error(error);
  }
  },
  watch: {
    sortBy(newValue) {
    if (newValue) {
    this.orderBy = '';
}
},
orderBy(newValue) {
    if (newValue) {
    this.sortBy = '';
}
}
},
  computed:{
    totalPrice(){
      return this.filteredProducts.reduce((sum,product) => sum+product.price,0);
    },
    totalPerPage(){
      return this.paginatedProducts.reduce((sum,product)=> sum + product.price, 0);
    },
    totalPages(){
      return Math.ceil(this.filteredProducts.length/this.pageSize);
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
      if(this.searchDescription){
        filtered=filtered.filter(product=>product.description.toLowerCase().includes(this.searchDescription.toLowerCase()))
      }
      if(this.sortBy){
        filtered=filtered.slice().sort((a,b)=>{
          return this.sortBy==='asc'
          ?a.title.localeCompare(b.title)
          :b.title.localeCompare(a.title)
        })
      }

      if(this.orderBy){
      filtered=filtered.slice().sort((a,b)=>{
      return this.sortBy==='asc'
      ?a.price-b.price
      :b.price-a.price;
      })
      }
      return filtered;
    }
  },
  methods:{
addProduct(newProduct){
  this.products.unshift({id:Date.now(), ...newProduct});
  if(!this.categories.includes(newProduct.category)){
    this.categories.push(newProduct.category);
  }
  this.showAddModal=false;
  this.currentPage=1;
},
showProduct(product){
  this.selectedProduct=product;
  this.showDetailsModal=true;
},
editProduct(product){
  this.selectedProduct={ ...product};
  this.showEditModal=true;
},
updateProduct(updatedProduct){
  const index=this.products.findIndex(p=>p.id === updatedProduct.id);
  if(index !== -1){
    this.products.splice(index,1,updatedProduct);
  }
  this.showEditModal=false;
},
deleteProduct(id){
  if(confirm("do you want to delete")){
    this.products=this.products.filter(product=>product.id!==id)
  }
},
changePage(page){
  if(page>=1 && page<=this.totalPages){
    this.currentPage=page;
  }
}
}}
</script> 

 <template>
  <div class="container"> 
    <h5 style="text-align: center;" >product listing</h5>
    <div>
      <select v-model="selectedCategory">
        <option value="">select category</option>
        <option :value="category" :key="category" v-for="category in categories">{{ category }}</option>
      </select>
      <select style="margin-left: 350px;" v-model="sortBy">
          <option value="" selected>Sort By:</option>
          <option value="title">title</option>
          <option value="price">price</option>
        </select>
        <select style="margin-left: 416px;" v-model="orderBy">
          <option value="" selected>Order by:</option>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
    </div>
    <br>

    <div>
      <input type="text" v-model="searchQuery" placeholder="enter title to search" > 
    </div>
    <div>
      <input style="margin-left: 848px;" type="text" v-model="searchDescription" placeholder="enter description to search">
    </div>
<br>
    <button style="margin-left: 12px;" @click.prevent="showAddModal=true">add new data</button>
    <div class="container">
        <table style="margin-left: auto; margin-right: auto;" class="table table-striped" border="1">
          <thead>
          <tr>
            <th>Sr no</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th>Description</th>
            <th rowspan="3">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product) in paginatedProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <img :src="product.image" alt="product Image" style="width: 40px; height: 40px;" />
            </td>
            <td>{{ product.category }}</td>
            <td>{{ product.description }}</td>
            <td>
              <button @click="showProduct(product)"><img style="height: 25x; width: 25px;" src="/view.png"></button>
              <button @click="editProduct(product)"><img style="height: 25x; width: 25px;" src="/edit.png"></button>
              <button @click="deleteProduct(product.id)"><img style="height: 25x; width: 25px;" src="/delete.png"></button>
            </td>
          </tr>
          </tbody>
        </table>
        <div style="display: flex">
          <h6>total products {{ products.length }}</h6>
          <h6 style="margin-left: 346px">total price {{ totalPrice.toFixed(3) }}</h6>
          <h6 style="margin-left: auto">total price per page {{ totalPerPage.toFixed(3) }}</h6>
        </div>
       
    <nav aria-label="Page navigation example">
    <ul style="margin-left: 472px;" class="pagination">
      <li>
      <button @click="changePage(currentPage-1)"><</button>
      </li>
      <li
      v-for="page in totalPages"
      :class="{active:currentPage===page}"
      :key="page"
      >
      <button @click="changePage(page)">{{ page }}</button>
      </li>
      <li>
        <button @click="changePage(currentPage+1)">></button>
      </li>
    </ul>
    </nav>
  </div>
</div>
        <AddProduct 
        :showModal="showAddModal"
        @add-product="addProduct"
        @close="showAddModal=false"
        />
        <ShowProduct 
        :showDetailsModal="showDetailsModal"
        :product="selectedProduct"
        @close="showDetailsModal=false"
        />
        <EditProduct
        :showEditModal="showEditModal"
        :product="selectedProduct"
        :categories="categories"
        @update-product="updateProduct"
        @close="showEditModal=false"
        />
</template> 

     