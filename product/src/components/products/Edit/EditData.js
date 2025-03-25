export default {
  props: {
    showEditModal: Boolean,
    product: Object,
    categories: Array,
  },
  data() {
    return {
    productData: { ...this.product }
    };
  },
  
  watch: {
    product(newProduct) {
      this.productData = { ...newProduct };
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.productData.image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateProduct() {
      console.log(this.productData);
      
      this.$emit('update-product', this.productData);
    }
  }
};