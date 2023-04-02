<template>
  <header class="container flex">
    <div class="flex items-center">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
        <RouterLink :to="{ name: 'Products' }">Products</RouterLink>
        <RouterLink :to="{ name: 'User', params: { afterUser: 'info' } }">User</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
</script>