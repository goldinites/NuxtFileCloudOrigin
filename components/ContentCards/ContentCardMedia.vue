<template>
  <div class="content-card__media">
    <div v-if="isImage" class="content-card__image-wrapper">
      <img
          class="content-card__image"
          :src="card?.url"
          :alt="card?.name"
      >
      <nuxt-icon class="content-card__icon content-card__icon--zoom" name="zoom"/>
    </div>
    <div v-else-if="isVideo" class="content-card__video-wrapper">
      <video class="content-card__video" muted playsinline>
        <source :src="card?.url" type="video/mp4">
      </video>
      <nuxt-icon class="content-card__icon" name="play"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  card?: Content
}>();

const isImage = computed(() => {
  return props.card?.type === 'image';
})

const isVideo = computed(() => {
  return props.card?.type === 'video';
})
</script>

<style scoped lang="scss">
.content-card {
  $card: &;

  &__media {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    & #{$card}__icon:not(#{$card}__icon--zoom) {
      transform: translate(-50%, -50%) scale(1.15);
    }

    & #{$card}__icon--zoom {
      opacity: 1;
    }
  }

  &__image, &__video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    &-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    z-index: $elevated-z-index;
    width: 35px;
    height: 35px;
    transition: 0.2s;

    &:deep(svg) {
      width: 100%;
      height: 100%;
    }

    &--zoom {
      opacity: 0;

      &:deep(svg) {
        path {
          fill: transparent !important;
        }
      }
    }
  }
}
</style>
