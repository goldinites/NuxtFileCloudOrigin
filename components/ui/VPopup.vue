<template>
  <teleport to="body">
    <div class="popup">
      <div class="popup-body">
        <div class="popup-top">
          <div class="popup-title">{{ popupTitle }}</div>
          <div class="popup-close" @click="$emit('close')">
            <nuxt-icon name="close"/>
          </div>
        </div>
        <div class="popup-content">
          <slot/>
        </div>
      </div>
      <div class="popup-backdrop" @click="$emit('close')"/>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps<{
  popupTitle?: string;
}>();

const emit = defineEmits(['close']);

onMounted(() => {
  function closePopupByKeydownHandler (e: KeyboardEvent) {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', closePopupByKeydownHandler);
      emit('close');
    }
  }

  document.addEventListener('keydown', closePopupByKeydownHandler);
});
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: $popup-z-index;
  display: flex;
  justify-content: center;
  align-items: center;

  &-body {
    position: relative;
    background-color: $blue-3;
    border-radius: 12px;
    z-index: $elevated-z-index;
    width: 570px;
  }

  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 30px;
    border-bottom: 1px solid $blue-4;
  }

  &-content {
    padding: 30px;
  }

  &-title {
    @include font(24px, 130%, 700);
  }

  &-close {
    width: 32px;
    height: 32px;
    cursor: pointer;

    &:deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  &-backdrop {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
  }
}
</style>
