import { Typography } from "@mui/material";
import * as Styled from "./Header.styled";
import { texts } from "constants/texts";
import { Logo } from "components/logo";
import { AddPathModal } from "components/addPathModal";
import useAddPathModal from "components/addPathModal/hooks/useAddPathModal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useAddPathModal();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Styled.Container>
      <Styled.Logo onClick={navigateToHome}>
        <Logo />
        <Typography variant="h1">{texts.saunter}</Typography>
      </Styled.Logo>
      <Styled.AddPathButton
        variant="contained"
        size="large"
        onClick={openModal}
      >
        {texts.addPath}
      </Styled.AddPathButton>
      <AddPathModal isOpen={isOpen} onClose={closeModal} />
    </Styled.Container>
  );
};

export default Header;
