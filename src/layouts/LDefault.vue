<template>
  <header class="container flex">
    <div class="flex items-center">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <div></div>
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
        <div></div>
        <RouterLink :to="{ name: 'Products' }">Products</RouterLink>
        <div></div>
        <RouterLink :to="{ name: 'User', params: { afterUser: 'info' } }">User</RouterLink>
        <div></div>
        <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
</script>