<template>
  <div class="content-card__icon content-card__icon--file"/>
  <div class="content-card__bottom">
    <p class="content-card__title">{{ card?.name }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card?: Content
}>();
</script>

<style scoped lang="scss">
.content-card {
  &__icon {
    width: 48px;
    height: 48px;
    background-size: cover;

    &--file {
      background-image: url('@/assets/icons/file.svg');
    }
  }
}
</style>
