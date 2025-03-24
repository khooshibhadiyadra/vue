<template>
  <div v-if="showEditModal" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
      <h5>Edit Product</h5>
      <button type="button" @click="$emit('close')" class="btn btn-secondary" style="margin-left: 419px;">X</button>
    </div>
      <form @submit.prevent="updateProduct">
        <div class="form-group">
        <label>title:</label>
        <input v-model="productData.title" class="form-control" required />
        </div>
        <div class="form-group">
        <label>price:</label>
        <input type="number" v-model="productData.price" class="form-control" required />
        </div>
        <div class="form-group">
          <label>category:</label>
          <select v-model="productData.category" class="form-control" required>
            <option 
            v-for="category in categories" :key="category" :value="category" >{{ category}}</option>
          </select>
        </div>
        <div>
        <label>image:</label>
        <div>
        <img :src="productData.image" alt="product image" style="width: 100px; height: 100px;" />
        <input type="file" @change="handleFileUpload" class="form-control" />
        </div>
        </div>
        <div class="modal-actions">
          <button type="submit" class="btn btn-primary">Update</button>
          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
      this.$emit('update-product', this.productData);
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 40%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    outline: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.modal-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.modal-body{
  position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.form-control{
  width:80% ;
}
</style>