<script setup lang="ts">
import type { Product } from '@/model/products';

const props = defineProps<{
    product: Product 
}>()

const emit = defineEmits<{
    addToCart: [product: Product]
}>()

</script>

<template>
    <div>
        <div class="card" >
            <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="card-content">
                <p class="price">${{ product.price }}</p>
                <h3>{{ product.title }}</h3>
                <i>{{ product.brand }}</i>
                <p>{{ product.description }}</p>
                <button @click="emit(`addToCart `, product)" class="button is-primary">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>