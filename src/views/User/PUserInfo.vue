<template>
  <div>
    <div> welcome to user page </div>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
</script>