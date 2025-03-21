<template>
  <div v-if="showModal" class="modal d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Product</h5>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitProduct">
            <div class="mb-3">
              <label class="form-label">title</label>
              <input type="text" v-model="product.title" placeholder="product title" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">price</label>
              <input type="number" step="0.01" v-model="product.price" placeholder="product price" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">image</label>
              <input type="file" @change="handleFileUpload" class="form-control" required />
              <img v-if="product.image" :src="product.image" alt="product image" style="width: 100px; height: 100px;" />
            </div>  
            
            <div class="mb-3">
              <label class="form-label">category</label>
              <input type="text" v-model="product.category" placeholder="Enter category"  class="form-control" required />
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Add</button>
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal"></div>
</template>

<script>
export default {
  
  props: {
    showModal: Boolean,
  },
  data() {
    return {
      product:{
        title:'',
        price:'',
        image:'',
        category:'',
      },
    };
  },
  methods:{
    handleFileUpload(event){
      if(file){
        const reader=new FileReader();
        reader.onload = () => {
          this.product.image=reader.result;
        };
        reader.readAsDatatURL(file);
      }
    },
    submitProduct(){
      this.$emit('add-product', {...this.product});
      this.product={
        title:'',
        price:'',
        image:'',
        category:'',
      };
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-dialog {
  max-width: 500px;
}
</style>