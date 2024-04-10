<script setup>
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';
</script>
<template>
  <div class="flex justify-between lg:w-[730px] md:w-[573px] mb-6">
    <h1 class="text-charcoal dark:text-white font-bold text-[26px]">
      devfinder
    </h1>
    <button
      @click="toggleTheme"
      class="group flex items-center justify-between dark:text-white"
    >
      <span
        class="mr-4 text-sm text-slategray group-hover:text-dark dark:group-hover:text-glacier dark:text-white dark:hover:text-slategray font-bold tracking-[2.5px]"
        >{{ isDarkMode ? 'LIGHT' : 'DARK' }}</span
      >
      <IconSun class="group-hover:fill-glacier fill-white" v-if="isDarkMode" />
      <IconMoon class="group-hover:fill-dark fill-slategray" v-else />
    </button>
  </div>
</template>

<script>
import { themeState, toggleTheme } from '../themeState.ts';

export default {
  name: 'Header',
  methods: {
    toggleTheme,
  },
  computed: {
    isDarkMode() {
      return themeState.isDarkMode;
    },
  },
};
</script>
