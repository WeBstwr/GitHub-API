import { create } from "zustand";

const useProfileStore = create((set) => ({
  userProfile: {},
  repositories: [],
  followers: [],
  following: [],
  loading: false,
  fetchProfileData: async (username) => {
    set({ loading: true });
    try {
      const userProfileResponse = await fetch(
        `https://api.github.com/users/${username}`,
      );
      const userProfile = await userProfileResponse.json();
      const repositoriesResponse = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );
      const repositories = await repositoriesResponse.json();
      const followersResponse = await fetch(
        `https://api.github.com/users/${username}/followers`,
      );
      const followers = await followersResponse.json();
      const followingResponse = await fetch(
        `https://api.github.com/users/${username}/following`,
      );
      const following = await followingResponse.json();

      set({ userProfile, repositories, followers, following, loading: false });
    } catch (error) {
      console.error("Failed to fetch profile data", error);
      set({ loading: false });
    }
  },
}));

export default useProfileStore;
