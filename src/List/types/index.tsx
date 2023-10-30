import { EntitySimpleData } from "../../common/types/index.js";

export interface CharactersState {
  results: EntitySimpleData[];
  previous: string | null;
  next: string | null;
}
