<script setup lang="ts">
const route = useRoute();
console.log(route.fullPath);
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
<div>{{route.fullPath}}</div>
</template>

<style scoped lang="scss">

</style>
