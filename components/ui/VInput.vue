<template>
  <div
      class="input-wrapper"
      :class="{
        'input-wrapper--disabled': disabled
      }"
      :style="`--icon-size: ${iconSize}px; --icon-indent: ${iconIndent}px`"
      @click="$emit('click')"
  >
    <input
        class="input"
        :class="{
          'input--with-icon': icon
        }"
        :name="name"
        :type="type"
        :disabled="disabled"
        :maxlength="maxlength"
        :value="value"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
    >
    <nuxt-icon
        v-if="icon"
        class="input-icon"
        :name="icon"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'search' | 'url';
  autocomplete?: string;
  placeholder?: string;
  maxlength?: number | string;
  icon?: string;
  iconSize?: number | string;
  value?: string;
  disabled?: boolean;
  iconIndent: number | string,
}>(), {
  name: '',
  placeholder: '',
  maxlength: 255,
  type: 'text',
  autocomplete: 'off',
  value: '',
  disabled: false,
  icon: undefined,
  iconSize: 20,
  iconIndent: 6,
});

defineEmits(['input', 'change', 'click'])
</script>

<style lang="scss" scoped>
.input {
  $input: &;

  display: block;
  width: 100%;
  color: $white;
  padding: 16px;
  @include font(20px, 120%, 600);
  transition: 0.25s;

  &--with-icon {
    padding-right: calc(16px + var(--icon-indent) + var(--icon-size));
  }

  &::placeholder {
    opacity: 1;
  }

  &-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 2px solid $white;
    border-radius: 22px;
    overflow: hidden;

    &--disabled {
      opacity: 0.5;

      & #{$input} {
        pointer-events: none;
      }
    }
  }

  &-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: var(--icon-size);
    height: var(--icon-size);

    &:deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
