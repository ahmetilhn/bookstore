<template>
  <div class="w-full mt-10 flex flex-row flex-wrap">
    <template v-if="books?.length">
      <BookCard
        v-for="book in books"
        :id="book.id"
        :title="book.title"
        :price="book.price"
        :author="book.author"
        :coverImageUrl="book.coverImageUrl"
        :key="book.id"
      />
    </template>
    <template v-else>
      <p class="my-20 w-full text-center text-lg text-gray-400">
        Result not found
      </p>
    </template>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBookStore } from "~/store/books";
const { books } = storeToRefs(useBookStore());
</script>
