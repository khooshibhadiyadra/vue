<script src="./AddData.js"/>

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
              <label class="form-label">Title</label>
              <input type="text" v-model="product.title" placeholder="Product title" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Price</label>
              <input type="number" v-model="product.price" placeholder="Product price" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Image</label>
              <input type="file" @change="handleFileUpload" class="form-control" required />
              <img v-if="product.image" :src="product.image" alt="Product image" style="width: 100px; height: 100px;" />
            </div>
            <div class="mb-3">
              <label class="form-label">Category</label>
              <input type="text" v-model="product.category" placeholder="Enter category" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <input type="text" v-model="product.description" placeholder="Enter description" class="form-control" required />
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

<style scoped>
@import './AddData.css'; 
</style>
