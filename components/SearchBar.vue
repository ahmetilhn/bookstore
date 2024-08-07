<template>
  <div class="max-w-md mt-10 mx-auto">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search book E.G Sefiller"
        @input="handleChange"
      />
      <button
        class="text-white absolute end-2.5 bottom-2.5 bg-primary-500 hover:bg-primary-600 font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-700 focus:ring-primary-600"
      >
        Search
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useBookStore } from "~/store/books";
import type { IBook } from "~/types/IBook";
const { books, setBooks } = useBookStore();
let clonedBooks = [] as Array<IBook>;

const handleChange = (e: Event) => {
  const { value } = e?.target as HTMLInputElement;
  setBooks(filterBooks(value));
};
const filterBooks = (query: string): Array<IBook> => {
  // if query is empty return cloned all books
  if (!query.length) return clonedBooks;
  // delete spaces
  const _query = query.toLowerCase().trim();
  return clonedBooks.filter(
    (_book) =>
      _book.title.toLowerCase().includes(_query) ||
      _book.author.toLowerCase().includes(_query)
  );
};

onMounted(() => {
  clonedBooks = JSON.parse(JSON.stringify(books));
});
</script>
