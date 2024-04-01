import styled from "styled-components";

export const StyleAuthButton = styled.div`
  width: max-content;
  color: ${({ theme }) => theme.authBlue};
  border: 2px solid ${({ theme }) => theme.authBlue};
  border-radius: 10rem;
  padding: 0.4rem 0.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
