import { DocumentData, QuerySnapshot } from "firebase/firestore";

export const transformFirebaseData = (
  snapshot: QuerySnapshot<DocumentData, DocumentData>
) => {
  return snapshot.docs.map((item) => {
    const { markers, ...restData } = item.data();
    const parsedMarkers = JSON.parse(markers);

    return { ...restData, id: item.id, markers: parsedMarkers };
  });
};
