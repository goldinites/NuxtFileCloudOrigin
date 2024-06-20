<template>
  <div class="auth-layout">
    <div class="auth-layout__inner">
      <div class="auth-layout__head">
        <nuxt-icon class="auth-layout__icon" name="cloud"/>
        <h1 class="auth-layout__title">FileCloud</h1>
        <p class="auth-layout__description">Войдите или зарегистрируйтесь</p>
      </div>
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  flex: 1;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 36px;
    border-radius: 32px;
    background-color: $blue-2;
  }

  &__head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 16px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin: 0 auto;

    &:deep(svg) {
      width: 100%;
      height: 100%;

      path {
        fill: transparent !important;
      }
    }
  }

  &__title {
    @include font(30px, 120%, 700);
  }

  &__description {
    @include font(20px, 130%, 600);
    max-width: 250px;
    margin: 0 auto;
  }
}
</style>
