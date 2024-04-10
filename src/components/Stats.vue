<script setup>
import { computed } from 'vue';
import useStore from '../userState.ts';
const { userState } = useStore();

// a computed ref
const repos = computed(() => userState.data?.public_repos || '');
const followers = computed(() => userState.data?.followers || '');
const following = computed(() => userState.data?.following || '');

const stats = [
  ['Repos', repos],
  ['Followers', followers],
  ['Following', following],
];
</script>

<template>
  <div
    class="py-6 px-8 bg-zircon dark:bg-dark rounded-[10px] w-full flex justify-between lg:col-start-2 col-start-1 col-span-2"
  >
    <div v-for="stat in stats">
      <div class="text-dullblue dark:text-white text-[11px] md:text-[13px]">
        {{ stat[0] }}
      </div>
      <div
        class="text-charcoal dark:text-white text-[16px] md:text-[22px] font-bold"
      >
        {{ stat[1] }}
      </div>
    </div>
  </div>
</template>
