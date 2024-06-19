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
  @include font(20px, 130%, 600);
  border-radius: 22px;

  &--transparent {
    color: $white;
  }

  &--white {
    background-color: $white;
  }
  //background-color: $blue-5;
  //color: $white;
  //padding: 10px 20px;
  //border-radius: 8px;
  //transition: 0.25s;

  &:hover {
    //background-color: $blue-6;
  }
}
</style>
