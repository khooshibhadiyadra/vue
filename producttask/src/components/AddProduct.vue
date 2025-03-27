<script>
export default{
  props: {
    showModal: Boolean,
  },
  data(){
    return{
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
    reader.onload = ()=>{
    this.product.image = reader.result;
         };
    reader.readAsDataURL(file);
    }
  },
submitProduct(){
    this.$emit('add-product',{ ...this.product});
    this.product={
        title:'',
        price:'',
        image:'',
        category:'',
    };
    this.$emit('close');
}
}
};

</script>

<template>
<div v-if="showModal" tabindex="-1">
   <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
  <h5 class="modal-title">add new product</h5>
    <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <form @submit.prevent="submitProduct">
        <div class="mb-3">
        <label class="form-label">title</label>
        <input type="text" v-model="product.title" placeholder="enter title" class="form-control" required />
        </div>
        <div class="mb-3">
        <label class="form-label">price</label>
        <input type="number" v-model="product.price" placeholder="enter price" class="form-control" required />
        </div>
        <div class="mb-3">
        <label class="form-label">category</label>
        <input type="text" v-model="product.category" placeholder="enter category" class="form-control" required />
        </div>
        <div class="mb-3">
        <label class="form-label">image</label>
        <input type="file" @change="handleFileUpload" required />
        <img v-if="product.image" :src="product.image" alt="product image" style="height: 50px; width: 50px;" />
       </div>
        <div>
        <button type="submit">add</button>  
        <button type="button" @click="$emit('close')">cancel</button>
        </div>
    </form>
    <div v-if="showModal"></div>
    </div>
    </div>
    </div>
</template>
<style scoped>
</style>