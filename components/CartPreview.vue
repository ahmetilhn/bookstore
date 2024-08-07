<template>
  <div
    class="w-full rounded-lg md:w-2/5 border h-max border-gray-200 px-4 py-6 sm:px-6 md:ml-5"
  >
    <div class="flex my-3 justify-between text-base font-medium text-gray-900">
      <p>Number of products</p>
      <p>{{ cart?.length }}</p>
    </div>
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>{{ totalPrice }}</p>
    </div>
    <p class="mt-0.5 text-sm text-gray-500">
      Order now and have it delivered to your doorstep!
    </p>
    <button
      class="w-full flex mt-10 items-center justify-center rounded-md border border-transparent bg-primary-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-primary-600"
    >
      Checkout
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/cart";
import type { IBook } from "~/types/IBook";

const { cart } = storeToRefs(useCartStore());

const totalPrice = computed(() =>
  cart.value
    .reduce((acc: number, cur: IBook) => acc + cur.price, 0)
    .toLocaleString("tr-TR", {
      style: "currency",
      currency: "USD",
    })
);
</script>
