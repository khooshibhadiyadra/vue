<template>
  <div v-if="showDetailsModal" class="modal-overlay">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Product Details</h5>
          <button type="button" @click="$emit('close')" class="btn btn-secondary" style="margin-left: 626px;">X</button>
        </div>
        <div class="modal-body">
          <div v-if="product">
            <p><strong>Title:</strong> {{ product.title }}</p>
            <p><strong>Price:</strong> {{ product.price }}</p>
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>Image:</strong></p>
            <div>
              <img :src="product.image" alt="Product Image" style="width: 100px; height: 100px;" />
            </div>
            <p><strong>description:</strong> {{ product.description }}</p>
          </div>
        </div>
       </div>
    </div>
  </div>
  <div v-if="showDetailsModal"></div>
</template>
<script>
export default {
  props: {
    product: Object,
    showDetailsModal: Boolean,
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

</style>