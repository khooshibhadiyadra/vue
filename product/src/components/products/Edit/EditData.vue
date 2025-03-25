<script src="./EditData.js"/>

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

<style scoped>
@import './EditData.css'; 
</style>