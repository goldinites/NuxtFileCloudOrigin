<template>
  <div class="search">
    <VInput
        class="search-input"
        placeholder="Поиск"
        :icon="'search'"
        :icon-size="25"
    />
  </div>
</template>

<script setup lang="ts">
import VInput from "~/components/ui/VInput.vue";
</script>

<style lang="scss" scoped>
.search {
  width: 330px;

  &-input {
    &:deep(svg) {
      circle {
        fill: transparent !important;
      }
    }
  }
}
</style>
