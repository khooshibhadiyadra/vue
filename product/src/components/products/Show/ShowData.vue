<script src="./ShowData.js"/>

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

<style scoped>
@import './ShowData.css'; 
</style>