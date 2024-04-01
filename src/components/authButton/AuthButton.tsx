import React from "react";
import { StyleAuthButton } from "./AuthButton.styles";
import { FaUserCircle } from "react-icons/fa";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";

const AuthButton = () => {
  const { text } = useAppContext();

  return (
    <StyleAuthButton>
      <FaUserCircle size={22} />
      <Text className="authBtn">{text.signIn}</Text>
    </StyleAuthButton>
  );
};

export default AuthButton;
