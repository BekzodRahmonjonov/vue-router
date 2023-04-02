<template>
  <div> welcome to products page </div>
  <RouterLink :to="{ name: 'ProductSingle', params: { ProductId: 5 } }" > product with id: 5 </RouterLink>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

console.log(route, router);
</script>