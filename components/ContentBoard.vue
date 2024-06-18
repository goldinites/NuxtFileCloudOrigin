<template>
  <div class="content-wrapper">
      <ul  v-if="cards?.length" class="content-list">
        <li
            v-for="(card, index) in cards"
            :key="card.id ?? index"
            class="content-item"
        >
          <ContentCardWrapper
              :card="card"
              @delete="deleteCard"
          />
        </li>
      </ul>
      <div v-else>
        Отсутствуют данные для отображения
      </div>
  </div>
</template>

<script setup lang="ts">
import ContentCardWrapper from "~/components/ContentCards/ContentCardWrapper.vue";

const props = withDefaults(defineProps<{
      content?: Content[];
}>(), {
 content: () => []
});

const cards = ref<Content[]>(props.content);

const deleteCard = (id?: number) => {
  if (id) {
    cards.value = cards.value.filter(card => card.id !== id);
  }
}
</script>

<style scoped lang="scss">
.content {
  &-wrapper {
    @include wrapper-full('d');
  }

  &-list {
    margin: 60px 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 30px 20px;
  }
}
</style>
