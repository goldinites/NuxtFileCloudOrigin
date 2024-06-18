<template>
  <header class="header">
    <div class="logo">
      <NuxtLink class="logo__link" to="/">
        FileMananger
      </NuxtLink>
    </div>
    <div class="header__right">
      <SearchInput/>
      <div class="auth">
        <div class="auth__icon-wrapper">
         <nuxt-icon class="auth__icon" name="user"/>
        </div>
        <ul class="auth__menu">
          <li>
            <NuxtLink class="auth__menu-item" to="/user">Профиль</NuxtLink>
          </li>
          <li>
            <button class="auth__menu-item">Выйти</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding-top: 20px;
  padding-bottom: 20px;
  @include wrapper('d');

  &__right {
    display: flex;
    align-items: center;
    gap: 100px;
  }
}

.logo {
  @include font(36px, 130%, 600);

  &__link {
    color: $white;
  }
}

.auth {
  $auth: &;
  position: relative;
  padding-bottom: 5px;
  margin-top: 5px;

  &__icon {
    display: block;
    width: 20px;
    height: 20px;

    &-wrapper {
      padding: 10px;
      border-radius: 13px;
      background-color: $blue-3;
      cursor: pointer;
    }

    &:deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  &__menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    border-radius: 14px;
    overflow: hidden;
    background-color: $blue-3;
    min-width: 150px;
    z-index: $dropdown-z-index;

    li {
      border-bottom: 1px solid $blue-4;

      &:last-child {
        border-bottom: none;
      }
    }

    &-item {
      display: block;
      padding: 14px 20px;
      color: $white;
      width: 100%;
      text-align: left;
      transition: 0.15s;

      &:hover {
        background-color: $blue-5;
      }
    }
  }

  &:hover {
    #{$auth}__menu {
      display: block;
    }
  }
}
</style>
