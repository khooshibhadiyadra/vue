import { ref, onMounted, computed } from 'vue';

export default {
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
    editProduct(product) {
      this.selectedProduct = { ...product };
      this.showEditModal = true;
    },
    updateProduct(updatedProduct) {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct);
      }
      this.showEditModal = false;
    },
    deleteProduct(id) {
      if (confirm('Do you want to delete this?')) {
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
