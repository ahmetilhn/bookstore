import { defineStore } from "pinia";
import { type IBook } from "~/types/IBook";
import Cookie from "js-cookie";
export const useCartStore = defineStore({
  id: "cart-store",
  state: () => {
    return {
      cart: [] as Array<IBook>,
    };
  },
  actions: {
    setCart(items: Array<IBook>) {
      this.cart = items;
    },
    addBook(item: IBook) {
      this.cart.push(item);
      this.updateStorage();
    },
    removeBook(id: IBook["id"]) {
      this.cart = JSON.parse(JSON.stringify(this.cart)).filter(
        (_book: IBook) => _book.id != id
      );
      this.updateStorage();
    },
    updateStorage() {
      Cookie.set("cart", JSON.stringify(this.cart));
    },
    initCart() {
      const storageBooks: string | undefined = Cookie.get("cart");
      if (storageBooks) {
        this.cart = JSON.parse(storageBooks);
      }
    },
  },
});
