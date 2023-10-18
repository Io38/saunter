import { FIREBASE_COLLECTION_PATHS } from "constants/constants";
import db from "fb/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { transformFirebaseData } from "utils/transformFirebaseData";
import { AddPathPayload } from "./types";
import { IPath } from "types";

class PathsService {
  async getPaths() {
    const snapshot = await getDocs(collection(db, FIREBASE_COLLECTION_PATHS));
    return transformFirebaseData(snapshot);
  }
  async createPath(payload: AddPathPayload) {
    const res = await addDoc(
      collection(db, FIREBASE_COLLECTION_PATHS),
      payload
    );
    return res;
  }
  async deletePath(id: string) {
    const res = await deleteDoc(doc(db, FIREBASE_COLLECTION_PATHS, id));
    return res;
  }
  async updatePath({ id, markers, ...path }: IPath) {
    const res = await setDoc(doc(db, FIREBASE_COLLECTION_PATHS, id), {
      ...path,
      markers: JSON.stringify(markers),
    });
    return res;
  }
}

const pathsService = new PathsService();
export default pathsService;
