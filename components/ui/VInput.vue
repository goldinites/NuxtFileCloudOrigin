<template>
  <div class="input-wrapper">
    <input
        class="input"
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
  value?: string;
  disabled?: boolean;
}>(), {
  name: '',
  placeholder: '',
  maxlength: 255,
  type: 'text',
  autocomplete: 'off',
  value: '',
  disabled: false,
  icon: undefined
});

defineEmits(['input', 'change'])
</script>

<style lang="scss" scoped>
.input {
  display: block;
  width: 100%;
  color: $white;

  &-wrapper {
    display: flex;
    padding: 16px 20px;
    background-color: $blue-2;
    border-radius: 15px;
    overflow: hidden;
  }

  &-icon {
    width: 20px;
    height: 20px;

    &:deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
