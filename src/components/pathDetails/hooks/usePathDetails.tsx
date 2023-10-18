import { texts } from "constants/texts";
import useCurrentPath from "hooks/useCurrentPath/useCurrentPath";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { deletePath, updatePath } from "redux/slices/paths/pathsSlice";
import { setSnackbar } from "redux/slices/snackbar/snackbarSlice";

const usePathDetails = () => {
  const { currentPath } = useCurrentPath();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const removePath = async () => {
    if (!currentPath) return;
    await dispatch(deletePath(currentPath.id));
    navigate("/");
    dispatch(
      setSnackbar({
        message: texts.pathRemoved,
        type: "success",
      })
    );
  };

  const addToFavorites = () => {
    if (!currentPath) return;
    dispatch(updatePath({ ...currentPath, isFavorite: true }));
    dispatch(
      setSnackbar({ message: texts.pathAddedToFavorites, type: "info" })
    );
  };

  const removeFromFavorites = () => {
    if (!currentPath) return;
    dispatch(updatePath({ ...currentPath, isFavorite: false }));
    dispatch(
      setSnackbar({ message: texts.pathRemovedFromFavorites, type: "info" })
    );
  };

  return {
    currentPath,
    removePath,
    addToFavorites,
    removeFromFavorites,
  };
};

export default usePathDetails;
