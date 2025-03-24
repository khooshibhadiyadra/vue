<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-dialog modal-lg" tabindex="-1">
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
              <input type="number" v-model="product.price" placeholder="product price" class="form-control" required />
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
            <div class="mb-3">
              <label class="form-label">description</label>
              <input type="text" v-model="product.description" placeholder="Enter description"  class="form-control" required />
            </div>

            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" style="float: right; margin-right: 30px;">Add</button>
              <button type="button" class="btn btn-secondary" style="float: right; margin-right: 30px;" @click="$emit('close')">Cancel</button>
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
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () =>{
   this.product.image = reader.result;
    console.log(this.product.image);
     };
reader.readAsDataURL(file);
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
    width: 100%;
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
  width: 97%
}
</style>