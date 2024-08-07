<template>
  <article
    class="lg:w-[calc(25%-1rem)] md:w-[calc(33.33%-1rem)] w-[calc(50%-1rem)] m-2 bg-white rounded-lg shadow border-gray-400 flex flex-col justify-between items-center"
  >
    <img
      class="w-1/2 p-4 rounded-t-lg"
      :src="coverImageUrl"
      :alt="title + ' image'"
    />
    <div class="w-full px-5 pb-5">
      <a href="#">
        <h5 class="text-md sm:text-lg font-semibold text-gray-600">
          {{ title }}
        </h5>
      </a>
      <span class="block text-primary-600 mt-2.5 mb-2 font-semibold">{{
        author
      }}</span>
      <div
        class="w-full flex items-center justify-between flex-wrap sm:flex-nowrap"
      >
        <span class="text-2xl font-bold text-black">${{ price }}</span>
        <button
          class="text-white w-full mt-5 sm:mt-0 sm:w-auto bg-primary-600 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Add to cart
        </button>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { type IBook } from "~/types/IBook";

const { title, author, coverImageUrl, price } = defineProps<IBook>();
</script>
