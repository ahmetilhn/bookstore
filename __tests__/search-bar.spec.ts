import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SearchBar from "../components/SearchBar.vue";
import { useBookStore } from "../store/books";

describe("BookSearch.vue", () => {
  let wrapper: ReturnType<typeof mount>;
  let bookStore: ReturnType<typeof useBookStore>;
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    bookStore = useBookStore();
    bookStore.setBooks = vi.fn();
    bookStore.books = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImageUrl: "",
        price: 10,
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImageUrl: "",
        price: 15,
      },
    ];
    wrapper = mount(SearchBar, {
      global: {
        plugins: [pinia],
      },
    });
  });

  it("renders the search input and button", () => {
    const input = wrapper.find("input");
    const button = wrapper.find("button");

    expect(input.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });

  it("filters books based on input", async () => {
    const input = wrapper.find("input");
    await input.setValue("Gatsby");

    expect(bookStore.setBooks).toHaveBeenCalledWith([
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImageUrl: "",
        price: 10,
      },
    ]);
  });

  it("does not filter books if input is empty", async () => {
    const input = wrapper.find("input");
    await input.setValue("");
    expect(bookStore.setBooks).toHaveBeenCalledWith([
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImageUrl: "",
        price: 10,
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImageUrl: "",
        price: 15,
      },
    ]);
  });
});
