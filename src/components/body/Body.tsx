import { useContext } from "react";
import { StyleBody } from "./Body.styles";
import { useAppContext } from "../../context/App.context";
import Menu from "../menu/Menu";
import Contents from "../contents/Contents";

const Body = () => {
  const { isMenuSmall } = useAppContext();

  return (
    <StyleBody $isMenuSmall={isMenuSmall}>
      <Menu />
      <Contents />
    </StyleBody>
  );
};

export default Body;
