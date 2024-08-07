import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CartPreview from "../components/CartPreview.vue";
import { useCartStore } from "../store/cart";
describe("CartSummary.vue", () => {
  it("renders the correct number of products and subtotal", () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const cartStore = useCartStore();
    cartStore.cart = [
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
    const wrapper = mount(CartPreview, {
      global: {
        plugins: [pinia],
      },
    });

    expect(wrapper.findAll("p")[0].text()).toContain("Number of products");
    expect(wrapper.findAll("p")[1].text()).toBe("2");

    expect(wrapper.findAll("p")[2].text()).toContain("Subtotal");
    expect(wrapper.findAll("p")[3].text()).toBe("$30,00");
  });
});
