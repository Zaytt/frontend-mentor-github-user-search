import { reactive, readonly } from 'vue';

interface User {
  avatar_url: string;
  html_url: string;
  login: string;
  name: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
}

interface UserState {
  data: null | User;
  error: any;
  loading: boolean;
  spin: boolean;
}

export const state = reactive<UserState>({
  data: null,
  error: null,
  loading: false,
  spin: false,
});

async function fetchUser(username: string) {
  state.loading = true;
  state.error = null;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
      },
    });

    if (response.ok) {
      state.spin = true;
      setTimeout(() => {
        state.spin = false;
      }, 1200);
      const jsonData = await response.json();
      state.data = jsonData;
      state.error = null;
    } else {
      state.error = response.status;
    }
  } catch (error) {
    state.error = error;
    state.data = null;
  } finally {
    state.loading = false;
  }
}

fetchUser('octocat');

export default function useStore() {
  return { userState: readonly(state), fetchUser };
}
