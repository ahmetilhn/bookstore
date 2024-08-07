import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CartItem from "../components/CartItem.vue";
import type { IBook } from "../types/IBook";
import { useCartStore } from "~/store/cart";

describe("CartItem.vue", () => {
  it("renders the component correctly", () => {
    setActivePinia(createPinia());

    const book: IBook = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      coverImageUrl: "http://example.com/test.jpg",
      price: 20,
    };

    const wrapper = mount(CartItem, {
      global: {
        plugins: [createPinia()],
      },
      props: book,
    });

    expect(wrapper.find("h5").text()).toBe("Test Book");
    expect(wrapper.find("span.text-primary-600").text()).toBe("Test Author");
    expect(wrapper.find("img").attributes("src")).toBe(
      "http://example.com/test.jpg"
    );
  });

  it("calls removeBook when the button is clicked", async () => {
    const pinia = createPinia();
    setActivePinia(pinia);

    const cartStore = useCartStore();
    const book: IBook = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      coverImageUrl: "http://example.com/test.jpg",
      price: 20,
    };

    cartStore.cart = [book];
    cartStore.removeBook = vi
      .fn()
      .mockImplementationOnce(() => (cartStore.cart = []));
    const wrapper = mount(CartItem, {
      global: {
        plugins: [pinia],
      },
      props: book,
    });

    await wrapper.find("button").trigger("click");
    expect(cartStore.removeBook).toHaveBeenCalledWith(1);
    expect(cartStore.cart).toEqual([]);
  });
});
