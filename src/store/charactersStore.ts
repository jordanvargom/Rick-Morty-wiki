import create from "zustand";
import { store, character } from "./types";
import axios from "axios";
export const useStore = create<store>((sset) => ({
  characters: [],
  allCharacters: [],
  locations: [],
  locationsFilter: "All Location",
  originsFilter: "All Origins",
  getCharacters: async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    sset((state) => ({
      ...state,
      characters: res.data.results,
      allCharacters: res.data.results,
    }));
  },
  getLocation: async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    const locations = res.data.results.map((e: character) => e.location.name);
    const loc = [...new Set(locations)];

    sset((state) => ({
      ...state,
      locations: loc,
    }));
  },
  alphabeticalOrder: (order) => {
    if (order === "A-Z") {
      return sset((state) => ({
        ...state,
        characters: state.characters.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        }),
      }));
    }
    if (order === "Z-A") {
      return sset((state) => ({
        ...state,
        characters: state.characters.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }),
      }));
    } else {
      sset((state) => ({
        ...state,
        characters: state.allCharacters,
      }));
    }
  },
  filterLocation: (location) => {
    sset((state) => ({
      ...state,
      characters: state.allCharacters.filter(
        (c) =>
          (c.location.name === location || location === "All Location") &&
          (c.origin.name === state.originsFilter ||
            state.originsFilter === "All Origins")
      ),
      locationsFilter: location,
    }));
  },
  filterOrigin: (origin) => {
    sset((state) => ({
      ...state,
      characters: state.allCharacters.filter(
        (c) =>
          (c.origin.name === origin || origin === "All Origins") &&
          (c.location.name === state.locationsFilter ||
            state.locationsFilter === "All Location")
      ),
      originsFilter: origin,
    }));
  },
}));
