import { Divider, Stack, useMediaQuery } from "@mui/material";
import * as Styled from "./AddPathModalContent.styled";
import { AddPathModalForm } from "components/addPathModalForm";
import { AddPathModalContentProps } from "./types";
import { AddPathMap } from "components/addPathMap";

const AddPathModalContent = ({ closeModal }: AddPathModalContentProps) => {
  const isDesktop = useMediaQuery("(min-width:700px)");

  return (
    <Styled.Content>
      <Styled.NewPathDetails>
        <AddPathModalForm closeModal={closeModal} />
      </Styled.NewPathDetails>
      {isDesktop && (
        <>
          <Stack width="30px">
            <Divider orientation="vertical" sx={{ margin: "0 auto" }} />
          </Stack>
          <Styled.NewPathDetails>
            <AddPathMap />
          </Styled.NewPathDetails>
        </>
      )}
    </Styled.Content>
  );
};

export default AddPathModalContent;
