<template>
  <div class="card-popup">
    <div class="card-popup__inner">
      <template v-if="card?.type === 'image'">
        <div class="card-popup__image-wrapper">
          <img
              class="card-popup__image"
              :src="card?.url"
              :alt="card?.name"
          >
        </div>
        <div class="card-popup__bottom">
          <p class="card-popup__title">{{ card?.name }}</p>
        </div>
      </template>
      <template v-else-if="card?.type === 'video' || card?.type === 'audio'">
        <div class="card-popup__video-wrapper">
        <video v-if="card?.type === 'video'" class="card-popup__video" controls muted playsinline>
          <source :src="card?.url" type="video/mp4">
        </video>
        <audio v-else controls :src="card?.url" />
        </div>
      </template>
      <template v-else-if="card?.type === 'file'">
        <div class="card-popup__icon-wrapper">
          <div class="card-popup__icon card-popup__icon--file"/>
        </div>
        <div class="card-popup__bottom">
          <p class="card-popup__title">{{ card?.name }}</p>
        </div>
      </template>
    </div>
    <div class="card-popup__buttons">
      <a
          v-if="card?.type !== 'folder'"
          class="card-popup__download"
          :href="card?.url"
          :download="card?.name"
      >
        <nuxt-icon name="download"/>
        <span>Скачать</span>
      </a>
      <button
          class="card-popup__delete"
          @click.stop="deleteCardHandler(card?.id)"
      >
        <nuxt-icon name="close"/>
        <span>Удалить</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card?: Content
}>();

const emit = defineEmits(['delete']);

const deleteCardHandler = (id?: number) => {
  if (id) {
    emit('delete', id);
  }
}
</script>

<style scoped lang="scss">
.card-popup {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  &__icon {
    width: 128px;
    height: 128px;
    background-size: cover;

    &--file {
      background-image: url('@/assets/icons/file.svg');
    }

    &-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 300px;
    }
  }

  &__image, &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;

    &-wrapper {
      width: 100%;
      height: 300px;
      overflow: hidden;
    }
  }

  &__bottom {
    width: 100%;
    text-align: left;
  }

  &__title {
    @include font(24px, 120%, 600);
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 48px;
  }

  &__download {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    color: $white;
    transition: 0.2s;
    @include font(18px, 120%, 600);

    &:deep(svg) {
      width: 32px;
      height: 32px;

      path {
        fill: transparent !important;
      }
    }

    &:hover {
      color: $orange;
    }
  }

  &__delete {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    color: $white;
    transition: 0.2s;
    @include font(18px, 120%, 600);

    &:deep(svg) {
      width: 32px;
      height: 32px;
      margin-bottom: 0;
    }

    &:hover {
      color: $red;
    }
  }
}
</style>
