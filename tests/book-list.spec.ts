import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import BookList from "../components/BookList.vue";
import { useBookStore } from "../store/books";

describe("BooksList.vue", () => {
  it("renders a list of books correctly", () => {
    const pinia = createPinia();
    setActivePinia(pinia);

    const bookStore = useBookStore();

    bookStore.books = [
      {
        id: 1,
        title: "Book One",
        author: "Author One",
        coverImageUrl: "http://example.com/book1.jpg",
        price: 10,
      },
      {
        id: 2,
        title: "Book Two",
        author: "Author Two",
        coverImageUrl: "http://example.com/book2.jpg",
        price: 20,
      },
    ];
    const wrapper = mount(BookList, {
      global: {
        plugins: [pinia],
      },
    });

    expect(wrapper.findAll("bookcard")).toHaveLength(2);

    const firstBookCard = wrapper.findAll("bookcard")[0];
    expect(firstBookCard.attributes("title")).toBe("Book One");
    expect(firstBookCard.attributes("author")).toBe("Author One");
    expect(firstBookCard.attributes("coverimageurl")).toBe(
      "http://example.com/book1.jpg"
    );
    expect(firstBookCard.attributes("price")).toBe("10");
  });
});
