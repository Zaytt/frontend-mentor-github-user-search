<script setup>
import Card from './Card.vue';
import Bio from './Bio.vue';
import Stats from './Stats.vue';
import useStore from '../userState.ts';
import Contact from './Contact.vue';

const { userState } = useStore();
</script>

<template>
  <Card
    class="flex justify-between items-center w-full lg:p-12 md:p-10 py-8 px-6"
  >
    <div
      v-if="userState.data"
      class="grid grid-cols-[70px_1fr] md:grid-cols-[117px_1fr] gap-x-9 gap-y-8 w-full auto-cols-max"
    >
      <Bio />
      <Stats />
      <Contact />
    </div>
  </Card>
</template>

<script>
export default {
  name: 'DevCard',
};
</script>
