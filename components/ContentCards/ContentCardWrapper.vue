<template>
  <div class="content-card" @click="togglePopup(card?.type)">
    <div class="content-card__buttons">
      <button
          class="content-card__delete"
          @click.stop="deleteCardHandler(card?.id)"
      >
        <nuxt-icon name="close"/>
      </button>
      <a
          v-if="card?.type !== 'folder'"
          class="content-card__download"
          :href="card?.url"
          :download="card?.name"
      >
        <nuxt-icon name="download"/>
      </a>
    </div>
    <div class="content-card__inner">
      <template v-if="card?.type === 'folder'">
        <ContentCardFolder :card="card"/>
      </template>
      <template v-else-if="card?.type === 'image' || card?.type === 'video'">
        <ContentCardMedia :card="card"/>
      </template>
      <template v-else-if="card?.type === 'audio'">
        <ContentCardAudio :card="card"/>
      </template>
      <template v-else-if="card?.type === 'file'">
        <ContentCardFile :card="card"/>
      </template>
    </div>
  </div>
  <VPopup v-if="isOpenPopup" :popup-title="popupTitle" @close="togglePopup">
    <ContentCardPopupWrapper :card="card" @delete="deleteCardHandler"/>
  </VPopup>
</template>

<script setup lang="ts">
import ContentCardAudio from "~/components/ContentCards/ContentCardAudio.vue";
import ContentCardFolder from "~/components/ContentCards/ContentCardFolder.vue";
import ContentCardFile from "~/components/ContentCards/ContentCardFile.vue";
import ContentCardMedia from "~/components/ContentCards/ContentCardMedia.vue";
import VPopup from "~/components/ui/VPopup.vue";
import ContentCardPopupWrapper from "~/components/ContentCardsPopup/ContentCardPopupWrapper.vue";

const props = defineProps<{
  card?: Content
}>();

const emit = defineEmits(['delete']);

const isOpenPopup = ref<boolean>(false);

const togglePopup = (cardType?: ContentTypes) => {
  if (cardType !== 'folder') {
    isOpenPopup.value = !isOpenPopup.value
  }
}

const popupTitle = computed(() => {
  let title: string = '';
  switch (props.card?.type) {
    case 'file':
      title = 'Документ'
      break;
    case 'image':
      title = 'Изображение'
      break;
    case 'video':
      title = 'Видео';
      break;
    case 'audio':
      title = 'Аудиофайл';
      break;
  }

  return title;
});

const deleteCardHandler = (id?: number) => {
  if (id) {
    isOpenPopup.value = false;
    emit('delete', id)
  }
}
</script>

<style scoped lang="scss">
.content-card {
  $card: &;
  position: relative;
  min-height: 170px;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;
  background-color: $blue-2;
  transition: 0.2s;
  overflow: hidden;

  &:hover {
    background-color: $blue-4;

    & #{$card}__buttons {
      right: 10px;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    color: $white;
    padding: 40px 20px 20px;
    width: 100%;
    height: 100%;
  }

  &__buttons {
    position: absolute;
    right: -100px;
    top: 10px;
    bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: $elevated-z-index;
    transition: 0.2s;
  }

  &__download {
    width: 16px;
    height: 16px;
    color: $white;
    transition: 0.2s;

    &:deep(svg) {
      width: 100%;
      height: 100%;

      path {
        fill: transparent !important;
      }
    }

    &:hover {
      color: $orange;
    }
  }

  &__delete {
    width: 16px;
    height: 16px;
    color: $white;
    transition: 0.2s;

    &:deep(svg) {
      width: 100%;
      height: 100%;
      margin-bottom: 0;
    }

    &:hover {
      color: $red;
    }
  }
}
</style>
