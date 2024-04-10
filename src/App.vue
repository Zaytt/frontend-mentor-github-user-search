<script setup>
import Devfinder from './components/Devfinder.vue';
</script>

<template>
  <main>
    <div
      class="bg-zircon dark:bg-dark min-w-screen min-h-screen"
      :class="isDarkMode && 'dark'"
    >
      <div class="flex justify-center pt-36 pb-40">
        <Devfinder></Devfinder>
      </div>
    </div>
  </main>
</template>

<script>
import { themeState, toggleTheme } from './themeState.ts';

export default {
  name: 'App',
  computed: {
    isDarkMode() {
      return themeState.isDarkMode;
    },
  },
};
</script>
