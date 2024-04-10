<script setup>
import { computed } from 'vue';
import IconLocation from './icons/IconLocation.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconWebsite from './icons/IconWebsite.vue';
import IconCompany from './icons/IconCompany.vue';
import useStore from '../userState.ts';

const { userState } = useStore();

const location = computed(() => userState.data?.location || 'Not available');
const twitter_username = computed(
  () => userState.data?.twitter_username || 'Not available'
);
const blog = computed(() => userState.data?.blog || 'Not available');
const company = computed(() => userState.data?.company || 'Not available');
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-[7fr_4fr] gap-y-5 col-start-1 col-span-2 lg:col-start-2 text-dullblue fill-dullblue dark:text-white dark:fill-white text-[13px] md:text-[15px] font-thin"
  >
    <div class="flex flex-col">
      <div class="flex mb-5">
        <IconLocation
          class="min-w-5"
          :class="location === 'Not available' && 'fill-cadetblue'"
        />
        <span
          class="ml-4"
          :class="location === 'Not available' && 'text-cadetblue'"
          >{{ location }}</span
        >
      </div>
      <component
        :is="userState.data?.blog ? 'a' : 'span'"
        class="flex group"
        :class="{ 'hover:underline': userState.data?.blog }"
        :href="blog.includes('http') ? blog : `http://${blog}` || ''"
        target="_blank"
      >
        <IconWebsite
          class="min-w-5"
          :class="{ 'fill-cadetblue': !userState.data?.blog }"
        />
        <span
          class="ml-4"
          :class="{ 'text-cadetblue': !userState.data?.blog }"
          >{{ blog }}</span
        >
      </component>
    </div>
    <div>
      <component
        :is="userState.data?.twitter_username ? 'a' : 'span'"
        class="flex mb-5 group"
        :class="{ 'hover:underline': userState.data?.twitter_username }"
        :href="
          userState.data?.twitter_username
            ? `https://twitter.com/${twitter_username}`
            : ''
        "
        target="_blank"
      >
        <IconTwitter
          class="min-w-5"
          :class="{ 'fill-cadetblue': !userState.data?.twitter_username }"
        />
        <span
          class="ml-4"
          :class="{ 'text-cadetblue': !userState.data?.twitter_username }"
          >{{ twitter_username }}</span
        >
      </component>
      <div class="flex">
        <IconCompany
          class="min-w-5"
          :class="company === 'Not available' && 'fill-cadetblue'"
        />
        <span
          class="ml-4"
          :class="company === 'Not available' && 'text-cadetblue'"
          >{{ company }}</span
        >
      </div>
    </div>
  </div>
</template>
