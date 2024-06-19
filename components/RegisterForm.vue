<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="formSubmit">
      <div class="form-fields">
        <VInput
            key="form-login"
            class="form-input form-input__login"
            placeholder="Логин или Email"
            :value="formData.login"
            @input="formData.login = $event"
        />
        <VInput
            key="form-password"
            class="form-input form-input__password"
            placeholder="Пароль"
            type="password"
            :value="formData.password"
            @input="formData.password = $event"
        />
        <VInput
            key="form-confirm-password"
            class="form-input form-input__password"
            placeholder="Повторите пароль"
            type="password"
            :value="formData.confirm_password"
            @input="formData.confirm_password = $event"
        />
        <VButton type="submit">
          Создать Cloud
        </VButton>
      </div>
      <VButton
          view="white"
          @click="router.push('/auth')"
      >
        Авторизоваться
      </VButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import VInput from "~/components/ui/VInput.vue";
import VButton from "~/components/ui/VButton.vue";

const formData = reactive<{
  login: string;
  password: string;
  confirm_password: string;
}>({
  login: '',
  password: '',
  confirm_password: ''
});

const router = useRouter()

const formSubmit = () => {
    console.log(formData)
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 64px;

  &-fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &-wrapper {
    width: 375px;
  }

  &-input {
    &__login {
      &--password-step {
        cursor: pointer;

        &:deep(.input-icon) {
          transform: rotate(-90deg);
          transform-origin: top;
          right: 20px;

          path {
            fill: transparent !important;
          }
        }
      }
    }
  }
}
</style>
