import create from "zustand";
import { store } from "./types";
import axios from "axios";
export const useStore = create<store>((set) => ({
  characters: [],
  getCharacters: async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    set((state) => ({
      ...state,
      characters: res.data.results,
    }));
  },
}));

// import create from "zustand";
// import { persist } from "zustand/middleware";

// type favoriteRepoState = {
//   favoriteReposIds: number[];
//   addFavoriteRepo: (id: number) => void;
//   removeFavoriteRepo: (id: number) => void;
// };

// export const useFavoriteReposStore = create(
//   persist((set) => ({
//     favoriteReposIds: [],
//     addFavoriteRepo: (id: number) =>
//       set((state) => ({ favoriteReposIds: [...state.favoriteReposIds, id] })),
//     removeFavoriteRepo: (id: number) =>
//       set((state) => ({
//         favoriteReposIds: state.favoriteReposIds.filter(
//           (repoId) => repoId !== id
//         ),
//       })),
//   }), {
//     name: "favoriteRepos",
//   })
// );
