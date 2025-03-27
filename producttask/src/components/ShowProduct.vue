<script>
export default{
    props: {
    showDetailsModal: Boolean,
    product: Object,
  },
 };
</script>

<template>
     <div v-if="showDetailsModal" class="modal d-block" tabindex="-1">
        <div class="modal-dialog">
           <div class="modal-content">
          <div class="modal-header">
             <h5 class="modal-title">product Details</h5>
             </div>
             <div class="modal-body">
              <div v-if="product">
                <p>title: {{ product.title }}</p>
                <p>price: {{ product.price }}</p>
                <p>category: {{ product.category }}</p>
                <p>image: </p>
                <div>
                    <img :src="product.image" alt="product image" style="height: 50px; width: 50px;"/>
                </div>
              </div>
             </div>
             <div class="modal-footer">
                <button type="button" @click="$emit('close')">close</button>
            </div>
           </div>
         </div>    
      </div>

</template>
<div v-if="showDetailsModal" ></div>

<style scoped>
</style>