<script setup>
import IconSearch from './icons/IconSearch.vue';
import Card from './Card.vue';
import useStore from '../userState.ts';

const { userState, fetchUser } = useStore();
</script>

<template>
  <Card
    class="pl-4 md:pl-8 pr-[7px] md:pr-[10px] py-[7px] md:py-[10px] flex justify-between items-center w-full mb-6 h-[60px] md:h-[69px]"
  >
    <IconSearch class="fill-primary mr-6 min-w-7 w-6 h-6" />
    <input
      @keypress.enter="fetchUser(username)"
      class="placeholder:text-dullblue text-dark dark:text-white w-full outline-none dark:bg-nileblue text-[13px] md:text-[18px] text-ellipsis overflow-hidden ..."
      type="text"
      placeholder="Search GitHub username…"
      v-model.trim="username"
    />
    <span v-if="userState.error" class="text-warning min-w-[92px] text-[15px]"
      >No results</span
    >
    <button
      :disabled="!username || username.toLowerCase() === userState.data.login"
      @click="fetchUser(username)"
      class="bg-primary text-white rounded-[10px] py-3 px-6 ml-6 hover:bg-crystalblue disabled:bg-crystalblue text-[14px] md:text-base h-[46px] md:h-[50px]"
    >
      Search
    </button>
  </Card>
</template>

<script>
import { themeState } from '../themeState.ts';

export default {
  name: 'SearchBar',
  data() {
    return {
      username: '',
      user: null,
    };
  },
};
</script>
