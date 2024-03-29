import { EntitySimpleData } from "../../../common/types/index.js";

export interface TextInfoProps {
  caption: string;
  text?: string;
}

export interface LinkInfoProps {
  caption: string;
  data: EntitySimpleData;
}

export interface ArrayInfoProps {
  caption: string;
  data: EntitySimpleData[];
}
