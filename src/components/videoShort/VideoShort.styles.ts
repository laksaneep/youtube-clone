import styled from "styled-components";

export const StyledVideoShort = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const VideoShortHeader = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 22px;
    margin-left: 0.5rem;
    font-weight: bold˙˙;
  }
`;

export const ShortVideoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.5rem;
`;

export const MoreLessContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.divider};
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const MoreLessButton = styled.button`
  border: 1px solid ${({ theme }) => theme.divider};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  width: 23.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 100rem;
  transform: translateY(-50%);

  &:hover {
    background-color: ${({ theme }) => theme.grey2};
    cursor: pointer;
  }

  .icon {
    color: ${({ theme }) => theme.text};
  }
`;
