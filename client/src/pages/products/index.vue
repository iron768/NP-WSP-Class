<script setup lang="ts">
    import { ref } from "vue";
    import { type Product, getProducts } from "@/model/products";

    const products = ref([] as Product[]);

    products.value = getProducts();
</script>

<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="card">
      <div class="card-image">
        <img :src="product.thumbnail" :alt="product.name"/>
      </div>
      <div class="card-content">
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .card {
        flex-basis: 15rem;
        flex-grow: 1;
        margin: .5rem;
    }

    h3 {
        font-weight: bold;
    }

    .price {
        font-weight: bold;
        font-size: x-large;
        float: right;
        color: darkslategray;
    }

</style>
