import { v4 as geradorIds } from "uuid";

export const geradorId = (): string => {
  return geradorIds();
};
