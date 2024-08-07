<template>
  <div class="w-full mt-10 flex flex-row flex-wrap">
    <BookCard
      v-for="book in books"
      :id="book.id"
      :title="book.title"
      :price="book.price"
      :author="book.author"
      :coverImageUrl="book.coverImageUrl"
      :key="book.id"
    />
  </div>
</template>
<script setup lang="ts">
import { useBookStore } from "~/store/books";
const { books } = storeToRefs(useBookStore());
</script>
