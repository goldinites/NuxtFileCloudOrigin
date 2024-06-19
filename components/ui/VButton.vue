<template>
  <button
      class="button"
      :class="[buttonClass]"
      :type="type"
      :disabled="disabled"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'button' | 'submit',
  view?: 'transparent' | 'white'
  disabled?: boolean
}>(), {
  type: 'button',
  view: 'transparent',
  disabled: false
});

const buttonClass = computed(() => {
  const result = [];

  if (props.disabled) {
    result.push('button--disabled');
  }

  result.push(`button--${props.view}`);

  return result;
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
.button {
  border: 2px solid $white;
  padding: 13px 16px;
  @include font(20px, 130%, 700);
  border-radius: 22px;

  &--transparent {
    color: $white;
  }

  &--white {
    background-color: $white;
  }
}
</style>
