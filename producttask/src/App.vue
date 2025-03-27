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
      selectedProduct:null,
      showAddModal: false,
      showDetailsModal:false,
      showEditModal:false,
    };
  },
  async created(){
    try {
    const response = await fetch('https://fakestoreapi.com/products');
    this.products = await response.json();
    this.categories=[ ...new Set(this.products.map(product =>product.category))]
  } catch (error) {
    console.error(error);
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
  methods:{
  addProduct(newProduct){
  this.products.unshift({id: Date.now(), ...newProduct});
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
deleteProduct(){
  if(product.id){
    alert("do you want to delete?")
  }
}
},
}
</script> 

 <template>
    <h2 >Product Listing</h2>
    <div>
      <select v-model="selectedCategory">
        <option value="">select category</option>
        <option :value="category" :key="category" v-for="category in categories">{{ category }}</option>
      </select>
    </div>
    <div>
      <input type="text" v-model="searchQuery" placeholder="enter title to search" >
    </div>

    <button @click.prevent="showAddModal=true">add new data</button>
        <table border="1" style="margin-left: 300px;">
          <thead>
          <tr>
            <th>sr no</th>
            <th>title</th>
            <th>price</th>
            <th>image</th>
            <th>category</th>
            <th>actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product,index) in paginatedProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <img :src="product.image" alt="product Image" style="width: 40px; height: 40px;" />
            </td>
            <td>{{ product.category }}</td>
            <td>
              <button @click="showProduct(product)">show</button>
              <button @click="editProduct(product)">edit</button>
              <button @click="deleteProduct(product.id)">delete</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div style="display: flex">
          <h6>total products:- {{ products.length }}</h6>
          <h6 style="margin-left: 380px">total price:- {{ totalPrice.toFixed(3) }}</h6>
          <h6 style="margin-left: auto">total price per page:- {{ totalPerPage.toFixed(3) }}</h6>
        </div>
        <div>
          <ul>
            <li>
            <button> < </button>{{ currentPage+1 }}
            </li>
             <li>
            
            </li>
            <li>
            <button>></button> {{ currentPage-1 }}
            </li>
          </ul>
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

     