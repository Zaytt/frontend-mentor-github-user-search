<script setup>
import { computed } from 'vue';
import useStore from '../userState.ts';

const { userState } = useStore();
const spin = computed(() => userState.spin);
const name = computed(() => userState.data?.name || '');
const url = computed(() => userState.data?.html_url || '');
const login = computed(() => `@${userState.data?.login}` || '');
const joinedDate = computed(() =>
  userState.data ? dateToString(new Date(userState.data.created_at)) : null
);

function dateToString(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `Joined ${date.getDate()} ${
    months[date.getUTCMonth()]
  } ${date.getFullYear()}`;
}
</script>
<template>
  <div
    class="w-[70px] md:w-[117px] h-full flex items-start justify-center rows-span-1 lg:row-span-2"
  >
    <img
      :src="userState.data?.avatar_url || ''"
      class="w-ful h-[70px] md:h-[117px] rounded-[50%]"
      :class="{
        'animate-rotate-y animate-once animate-ease-out animate-duration-[1200ms]':
          spin,
      }"
    />
  </div>
  <div
    class="w-full h-full flex lg:justify-between justify-start lg:flex-row flex-col"
  >
    <div class="pb-1.5">
      <div
        class="text-base md:text-[26px] text-charcoal dark:text-white font-bold md:mb-3"
      >
        {{ name || login }}
      </div>
      <a
        :href="url"
        target="_blank"
        class="text-primary text-[13px] md:text-base hover:underline"
        >{{ login }}</a
      >
    </div>
    <div
      class="text-slategray dark:text-white text-[13px] md:text-[15px] p-0 -mr-9"
    >
      {{ joinedDate }}
    </div>
  </div>
  <div class="h-full flex items-center justify-start col-span-2">
    <p
      class="w-full text-left text-dullblue dark:text-white font-light text-[13px] md:text-base"
    >
      {{ userState.data?.bio || 'This profile has no bio' }}
    </p>
  </div>
</template>
