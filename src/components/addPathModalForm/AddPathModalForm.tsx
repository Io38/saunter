import { Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import * as Styled from "./AddPathModalForm.styled";
import { texts } from "constants/texts";
import useAddPathModal from "./hooks/useAddPathModal";
import { AddPathModalFormProps } from "./types";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getPaths, selectDistance } from "redux/slices/paths/pathsSlice";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import DoneIcon from "@mui/icons-material/Done";
import { formatDistance } from "utils/formatDistance";
import { AddPathMap } from "components/addPathMap";
import { setSnackbar } from "redux/slices/snackbar/snackbarSlice";
import {
  ADD_PATH_FORM_TITLE_TEST_ID,
  ADD_PATH_BUTTON_TEST_ID,
} from "constants/testIds";

const AddPathModalForm = ({ closeModal }: AddPathModalFormProps) => {
  const dispatch = useAppDispatch();
  const distance = useAppSelector(selectDistance);

  const onPathAdd = () => {
    dispatch(getPaths());
    closeModal();
    dispatch(setSnackbar({ type: "success", message: texts.pathAdded }));
  };

  const { register, watch, errors, handleAddPath } = useAddPathModal({
    onPathAdd,
  });
  const shortDescriptionLength = watch("shortDescription").length;
  const isDesktop = useMediaQuery("(min-width:700px)");

  return (
    <Styled.FormContainer>
      <Styled.FieldsContainer>
        <Styled.FormItem>
          <Typography>{texts.title}</Typography>
          <TextField
            fullWidth
            size="small"
            {...register("title", {
              required: { value: true, message: texts.titleRequired },
            })}
            error={!!errors.title}
            helperText={errors.title?.message}
            data-testid={ADD_PATH_FORM_TITLE_TEST_ID}
          />
        </Styled.FormItem>
        <Styled.FormItem>
          <Typography>{texts.shortDescription}</Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={3}
            inputProps={{ maxLength: 160 }}
            {...register("shortDescription")}
            helperText={`Limit ${shortDescriptionLength} of 160`}
          />
        </Styled.FormItem>
        <Styled.FormItem>
          <Typography>{texts.fullDescription}</Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={5}
            {...register("fullDescription")}
          />
        </Styled.FormItem>
      </Styled.FieldsContainer>

      <Styled.ButtonContainer>
        <Stack direction="row" gap="10px" alignItems="center">
          <MapOutlinedIcon fontSize="large" />
          <Typography variant="h2">{`${texts.length} ${formatDistance(
            distance
          )}`}</Typography>
        </Stack>
        {!isDesktop && <AddPathMap />}
        <Styled.SubmitButton
          variant="outlined"
          color="secondary"
          size="large"
          onClick={handleAddPath}
          data-testid={ADD_PATH_BUTTON_TEST_ID}
        >
          <Stack direction="row" gap="20px">
            <DoneIcon />
            {texts.addPath}
          </Stack>
        </Styled.SubmitButton>
      </Styled.ButtonContainer>
    </Styled.FormContainer>
  );
};

export default AddPathModalForm;
