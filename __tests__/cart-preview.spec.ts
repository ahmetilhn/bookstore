import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CartPreview from "../components/CartPreview.vue";
import { useCartStore } from "../store/cart";
describe("CartPreview.vue", () => {
  let wrapper: ReturnType<typeof mount>;
  let cartStore: ReturnType<typeof useCartStore>;
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    cartStore = useCartStore();
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
    wrapper = mount(CartPreview, {
      global: {
        plugins: [pinia],
      },
    });
  });
  it("renders the correct number of products and subtotal", () => {
    expect(wrapper.findAll("p")[0].text()).toContain("Number of products");
    expect(wrapper.findAll("p")[1].text()).toBe("2");

    expect(wrapper.findAll("p")[2].text()).toContain("Subtotal");
    expect(wrapper.findAll("p")[3].text()).toBe("$30,00");
  });
  it("should empty cart", async () => {
    const emptyBtn = wrapper.find("button");
    await emptyBtn.trigger("click");
    expect(cartStore.cart).toEqual([]);
  });
});
