import { reactive } from 'vue';

let darkDefault = false;
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  darkDefault = true;
}

export const themeState = reactive({
  isDarkMode: darkDefault,
});

export const toggleTheme = () => {
  themeState.isDarkMode = !themeState.isDarkMode;
};
