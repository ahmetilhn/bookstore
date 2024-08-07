<template>
  <div class="w-full">
    <IntroBanner />
    <SearchBar />
    <BookList />
  </div>
</template>
<script setup lang="ts">
import bookService from "~/services/book.service";
import { useBookStore } from "~/store/books";
const { setBooks } = useBookStore();
useAsyncData(async () => {
  try {
    const res = await bookService.getAllBooks();
    if (Array.isArray(res?.data)) {
      setBooks(res.data);
    }
  } catch (err) {
    console.error(err);
  }
});
</script>
