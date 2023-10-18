import { useForm } from "react-hook-form";
import { FormValues } from "../types";
import pathsService from "services/pathsService";
import { UseAddPathModalParams } from "./types";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectDistance, selectMarkers } from "redux/slices/paths/pathsSlice";
import { setSnackbar } from "redux/slices/snackbar/snackbarSlice";
import { texts } from "constants/texts";

const useAddPathModal = ({ onPathAdd }: UseAddPathModalParams) => {
  const markers = useAppSelector(selectMarkers);
  const dispatch = useAppDispatch();
  const distance = useAppSelector(selectDistance);

  const defaultValues: FormValues = {
    title: "",
    shortDescription: "",
    fullDescription: "",
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues,
  });

  const handleAddPath = () => {
    handleSubmit((values) => {
      if (markers.length < 2) {
        console.log("asd");
        dispatch(setSnackbar({ type: "error", message: texts.addMarkers }));
        return;
      }
      const newPath = {
        ...values,
        distance: Math.floor(distance),
        isFavorite: false,
        markers: JSON.stringify(markers),
      };

      pathsService.createPath(newPath);
      onPathAdd();
    })();
  };
  return {
    register,
    errors,
    watch,
    handleAddPath,
  };
};

export default useAddPathModal;
