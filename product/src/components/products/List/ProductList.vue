<script src="./ProductList.js"/>
<template>
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
          <button style="margin: 3px" @click="$emit('show-product', product)" class="btn btn-outline-info">Show</button>
          <button style="margin: 3px" @click="$emit('edit-product', product)" class="btn btn-outline-info">Edit</button>
          <button style="margin: 3px" @click="$emit('delete-product', product.id)" class="btn btn-outline-info">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
