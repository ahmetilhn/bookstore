import { defineStore } from "pinia";
import { type IBook } from "~/types/IBook";

export const useBookStore = defineStore({
  id: "book-store",
  state: () => {
    return {
      books: [] as Array<IBook>,
    };
  },
  actions: {
    setBooks(val: Array<IBook>) {
      this.books = val;
    },
  },
});
