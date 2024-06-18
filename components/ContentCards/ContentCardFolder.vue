<template>
  <NuxtLink class="content-card__link" :to="card?.url">
    <div
        class="content-card__icon"
        :class="{
          'content-card__icon--folder': !card?.empty,
          'content-card__icon--folder-empty': card?.empty,
        }"
    />
    <div class="content-card__bottom">
      <p class="content-card__title">{{ card?.name }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  card?: Content
}>();
</script>

<style scoped lang="scss">
.content-card {
  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    color: $white;
    width: 100%;
    height: 100%;
  }

  &__icon {
    width: 48px;
    height: 48px;
    background-size: cover;

    &--folder {
      background-image: url('@/assets/icons/folder-with-files.svg');
    }

    &--folder-empty {
      background-image: url('@/assets/icons/folder-empty.svg');
    }
  }
}
</style>
