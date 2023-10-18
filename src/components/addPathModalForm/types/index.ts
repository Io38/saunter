import { IPath } from "types";

export type FormValues = Pick<
  IPath,
  "title" | "shortDescription" | "fullDescription"
>;

export interface AddPathModalFormProps {
  closeModal: () => void;
}
