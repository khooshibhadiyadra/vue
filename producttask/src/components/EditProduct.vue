<script>
export default{
    props:{
        showEditModal:Boolean,
        product: Object,
        Categories:Array

    },
data(){
    return{
        productData:{...this.product}
    };
},
watch:{
    product(newProduct){
        this.productData={ ...newProduct};
    }
},
methods:{

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
    },
 }};
</script>

<template>
    <div v-if="showEditModal">
        <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
  <h5 class="modal-title">edit product</h5>
    <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <form @submit.prevent="updateProduct">
        <div class="mb-3">
        <label class="form-label">title</label>
        <input type="text" v-model="productData.title" placeholder="enter title" class="form-control" required />
        </div>
        <div class="mb-3">
        <label class="form-label">price</label>
        <input type="number" v-model="productData.price" placeholder="enter price" class="form-control" required />
        </div>
        <div class="mb-3">
        <label class="form-label">category</label>
        <input type="text" v-model="productData.category" placeholder="enter category" class="form-control" required />
        </div>
        <div class="mb-3">
        <label class="form-label">image</label>
        <input type="file" @change="handleFileUpload" required />
        <img v-if="product.image" :src="product.image" alt="product image" style="height: 50px; width: 50px;" />
       </div>
        <div>
        <button type="submit">update</button>  
        <button type="button" @click="$emit('close')">cancel</button>
        </div>
    </form>
    <div v-if="showEditModal"></div>
    </div>
    </div>
    </div>
    </template>

<style>
</style>