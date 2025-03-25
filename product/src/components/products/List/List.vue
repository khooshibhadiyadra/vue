<script src="./List.js"/>
<template>
    <div v-if="showListModal">
    <div class="container mt-5" style="width: max-content">
      <h2 class="text-center mt-5 mb-3">Products Listing</h2>
      <div class="card" style="width: 1200px">
        <div class="card-header">
          <button @click="showAddModal = true" class="btn btn-outline-primary">
            Add New Product
          </button>
        </div>
        <br>
        <div>
          <label for="categoryfilter">Select category to filter:</label>
          <select v-model="selectedCategory">
            <option value="">Select Category</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <label class="producttitle" for="producttitle">Enter title of product to search:</label>
          <input type="text" v-model="searchQuery">
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th style="width: 300px">Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category</th>
              <th style="width: 250px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in paginatedProducts" :key="product.id">
              <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.price }}</td>
              <td>
                <img :src="product.image" alt="product image" style="width: 50px; height: 50px;" />
              </td>
              <td>{{ product.category }}</td>
              <td>
                <button style="margin: 3px" @click="showProduct(product)" class="btn btn-outline-info">Show</button>
                <button style="margin: 3px" @click="editProduct(product)" class="btn btn-outline-info">Edit</button>
                <button style="margin: 3px" @click="deleteProduct(product.id)" class="btn btn-outline-info">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div style="display: flex">
          <h5>Total products: {{ products.length }}</h5>
          <h5 style="margin-left: 350px">Total price: {{ totalPrice.toFixed(2) }}</h5>
          <h5 style="margin-left: 200px;">Total price per page: {{ totalPerPage.toFixed(2) }}</h5>
        </div>
  
        <ul class="parent-class">
          <button class="btn btn-outline-secondary" @click="changePage(currentPage - 1)"> < </button>
          <ul v-for="page in totalPages" :key="page">
            <button class="btn btn-outline-secondary" @click="changePage(page)">{{ page }}</button>
          </ul>
          <button class="btn btn-outline-secondary" @click="changePage(currentPage + 1)"> > </button>
        </ul>
      </div>
    </div>
    <div>
    </div>
    </div>
     
  </template>

<style scoped>
@import './List.css'; 
</style>
  
 
  