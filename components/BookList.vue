<template>
  <div class="w-full mt-10 flex flex-row flex-wrap">
    <BookCard v-for="item in 10" :key="item" />
  </div>
</template>
