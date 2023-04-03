<template>
  <div> welcome to product single page </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

console.log(route, router);
</script>