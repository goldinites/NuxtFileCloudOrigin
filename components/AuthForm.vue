<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="formSubmit">
      <div class="form-fields">
        <VInput
            key="form-login"
            class="form-input form-input__login"
            :class="{
              'form-input__login--password-step': formStep === 'password'
            }"
            placeholder="Логин или Email"
            :value="formData.login"
            @input="formData.login = $event"
            :icon="formStep === 'password' ? 'arrow' : ''"
            :icon-size="30"
            :disabled="formStep === 'password'"
            @click="formStep = 'login'"
        />
        <VInput
            v-if="formStep === 'password'"
            key="form-password"
            class="form-input form-input__password"
            placeholder="Пароль"
            type="password"
            :value="formData.password"
            @input="formData.password = $event"
        />
        <VButton type="submit">
          Войти
        </VButton>
      </div>
      <VButton
          view="white"
          @click="router.push('/register')"
      >
        Создать Cloud
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
}>({
  login: '',
  password: ''
});

const formStep = ref<'login' | 'password'>('login');

const router = useRouter()

const formSubmit = () => {
  if (formStep.value === 'login') {
    formStep.value = 'password';
  } else {
    console.log(formData)
  }
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
