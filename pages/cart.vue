<template>
  <div class="w-full mt-10 flex flex-row flex-wrap md:flex-nowrap">
    <div class="flex w-full lg:w-3/5 items-center flex-col">
      <template v-if="cart?.length">
        <CartItem
          v-for="_book in cart"
          :id="_book.id"
          :title="_book.title"
          :author="_book.author"
          :coverImageUrl="_book.coverImageUrl"
          :price="_book.price"
          :key="_book.id"
        />
      </template>
      <template v-else>
        <p class="my-20 w-full text-center text-lg text-gray-400">
          Cart is empty!
        </p>
      </template>
    </div>
    <CartPreview />
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from "~/store/cart";

const { cart } = storeToRefs(useCartStore());
</script>
