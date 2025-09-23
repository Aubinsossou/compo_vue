<script setup>
import { ref } from 'vue'
import Typography from '@/components/Typography.vue'

const get_storage = ref(JSON.parse(localStorage.getItem('list_tache')))

</script>

<template>
  <div class="container">
  <p>{{ get_storage[2] }}</p>
    <Typography tag="h1" text="Tache item" />
  </div>
</template>
<style scoped></style>
