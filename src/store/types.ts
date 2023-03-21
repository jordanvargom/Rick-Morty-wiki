export interface character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}
export interface store {
  characters: character[];
  allCharacters: character[];
  getCharacters: () => Promise<void>;
  locations: any;
  locationsFilter: string;
  originsFilter: string;
  getLocation: () => void;
  alphabeticalOrder: (order: string) => void;
  filterLocation: (locartion: string) => void;
  filterOrigin: (origin: string) => void;
}
