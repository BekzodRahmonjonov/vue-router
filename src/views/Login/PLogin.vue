<template>
  <div>
    <div> welcome to Login page </div>
    <div> {{ rate('Hello') }} </div>
    <button @click="gather"> gather conditions </button> 
    <button @click="filters.page++"> pagination </button>
  </div>
</template>
<script setup lang="ts">
import { isArray } from '@vue/shared';
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter()

const rate = computed(() => {
  return (message: string) => {
    return `${message}, John!`
  }
})
const filters = ref({
  page: 1,
  conditions: [] as number[]
})


const gather = () => {
  filters.value.conditions.push(Math.floor(Math.random() * 10))
}

watch(() => filters.value.page, () => {
  pushWithQuery('page', filters.value.page)
})
watch(() => filters.value.conditions, () => {
  pushWithQuery('conditions', filters.value.conditions)
}, {
  deep: true
})
function pushWithQuery(name: string, query: any) {
  const res = ref({})
  if(isArray(query)) {
    res.value[name] = query.join(',')
  } else {
    res.value[name] = query
  }
  console.log(res.value, 'query');
      router.push({
        query: {
          ...route.query,
          ...res.value,
        },
      })
    }
</script>