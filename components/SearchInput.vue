<template>
  <div class="search">
    <VInput
        placeholder="Поиск"
    />
  </div>
</template>

<script setup lang="ts">
import VInput from "~/components/ui/VInput.vue";
</script>

<style lang="scss" scoped>
.search {
  width: 330px;
}
</style>
