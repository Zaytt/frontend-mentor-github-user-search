<script setup>
import DevCard from './DevCard.vue';
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
</script>

<template>
  <div class="lg:w-[730px] md:w-[573px] w-[373px]">
    <Header></Header>
    <SearchBar />
    <DevCard />
  </div>
</template>
