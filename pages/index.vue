<template>
  <div>
    <ContentBoard :content="data" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/get-contents');
</script>

<style scoped>

</style>
