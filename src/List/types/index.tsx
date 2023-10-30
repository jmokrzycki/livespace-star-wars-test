import { EntitySimpleData } from "../../common/types.ts";

export interface CharactersState {
  results: EntitySimpleData[];
  previous: string | null;
  next: string | null;
}
