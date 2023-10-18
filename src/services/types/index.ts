import { IPath } from "types";

export interface AddPathPayload extends Omit<IPath, "id" | "markers"> {
  markers: string;
}
