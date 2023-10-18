import { useParams } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { selectAllPaths } from "redux/slices/paths/pathsSlice";

const useCurrentPath = () => {
  const paths = useAppSelector(selectAllPaths);
  const { id } = useParams();
  const currentPath = paths.find((path) => path.id === id);

  return {
    currentPath,
  };
};

export default useCurrentPath;
