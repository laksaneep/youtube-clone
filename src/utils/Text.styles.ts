import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 14px;

  &.logo {
    font-size: 22px;
    font-family: "Oswald" sans-serif;
    letter-spacing: -1px;
  }

  &.authBtn {
    color: ${(props) => props.theme.authBlue};
    font-weight: bold;
  }

  &.title {
    font-size: 16px;
    margin: 0 0 0.5rem 1.7rem;
    font-weight: bold;
  }
`;
