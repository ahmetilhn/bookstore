import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import BookCard from "../components/BookCard.vue";
import type { IBook } from "../types/IBook";
import { createPinia, setActivePinia } from "pinia";

describe("BookCard.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("renders the component correctly", () => {
    const book: IBook = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      coverImageUrl: "http://example.com/test.jpg",
      price: 20,
    };

    const wrapper = mount(BookCard, {
      props: book,
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(book.coverImageUrl);
    expect(img.attributes("alt")).toBe(book.title + " image");

    const title = wrapper.find("h5");
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe(book.title);

    const author = wrapper.find("span.text-primary-600");
    expect(author.exists()).toBe(true);
    expect(author.text()).toBe(book.author);

    const price = wrapper.find("span.text-2xl");
    expect(price.exists()).toBe(true);
    expect(price.text()).toBe(`$${book.price}`);

    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("Add to cart");
  });

  it("toggles button text on click", async () => {
    const book: IBook = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      coverImageUrl: "http://example.com/test.jpg",
      price: 20,
    };

    const wrapper = mount(BookCard, {
      props: book,
    });

    const button = wrapper.find("button");
    expect(button.text()).toBe("Add to cart");

    await button.trigger("click");
    expect(button.text()).toBe("Remove");

    await button.trigger("click");
    expect(button.text()).toBe("Add to cart");
  });
});
