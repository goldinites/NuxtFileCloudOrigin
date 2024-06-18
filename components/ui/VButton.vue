<template>
  <button
      class="button"
      :class="{'button--disabled': disabled}"
      :type="type"
      :disabled="disabled"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'button' | 'submit',
  disabled?: boolean
}>(), {
  type: 'button',
  disabled: false
});

defineEmits(['click'])
</script>

<style lang="scss" scoped>
.button {
  background-color: $blue-5;
  color: $white;
  padding: 10px 20px;
  border-radius: 8px;
  transition: 0.25s;

  &:hover {
    background-color: $blue-6;
  }
}
</style>
