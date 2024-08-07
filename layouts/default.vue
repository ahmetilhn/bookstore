<template>
  <main
    class="w-full flex flex-col justify-center items-center lg:py-10 pb-4 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full flex flex-col justify-center items-center max-w-6xl">
      <AppHeader />
      <slot />
    </div>
  </main>
</template>
<script setup lang="ts">
import { useCartStore } from "~/store/cart";

const { initCart } = useCartStore();

onMounted(() => {
  initCart();
});
</script>
