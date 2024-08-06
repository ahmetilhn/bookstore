<template>
  <div class="w-full mt-20 flex flex-row flex-wrap md:flex-nowrap">
    <div class="flex w-full lg:w-3/5 items-center flex-col">
      <BasketItem v-for="item in 10" :key="item" />
    </div>
    <BasketPreview />
  </div>
</template>
