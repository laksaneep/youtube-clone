import styled from "styled-components";

export const StyleSetting = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.settingsBg};
  position: absolute;
  right: 8%;
  top: 5%;
  width: 17.3vw;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 43px -3px ${({ theme }) => theme.settingsShadow};
  z-index: 200000;
`;

export const SettingItemStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.grey2};
    cursor: pointer;
  }
`;