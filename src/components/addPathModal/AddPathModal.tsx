import { Divider, Modal, Typography } from "@mui/material";
import * as Styled from "./AddPathModal.styled";
import { texts } from "constants/texts";
import { AddPathModalContent } from "components/addPathModalContent";
import { CLOSE_ICON_TEST_ID } from "constants/testIds";

export interface AddPathModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPathModal = ({ isOpen, onClose }: AddPathModalProps) => {
  return (
    <Modal open={isOpen} disableAutoFocus onClose={onClose}>
      <Styled.Container>
        <Styled.Title>
          <Typography variant="caption">{texts.addNewPath}</Typography>
          <Styled.CloseIcon
            data-testid={CLOSE_ICON_TEST_ID}
            onClick={onClose}
          />
        </Styled.Title>
        <Divider />
        <AddPathModalContent closeModal={onClose} />
      </Styled.Container>
    </Modal>
  );
};
export default AddPathModal;
