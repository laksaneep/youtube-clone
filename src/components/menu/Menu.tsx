import React from "react";
import { LargeMenuSection, MunuItem, StyleMenu } from "./Menu.styles";
import { useAppContext } from "../../context/App.context";
import { MENU_LARGE, MENU_SMALL } from "../../utils/SideMenu";
import { Text } from "../../utils/Text.styles";
import { ITranslations } from "../../utils/translations";
import AuthButton from "../authButton/AuthButton";

const Menu = () => {
  const { isMenuSmall, text, activeMenuText } = useAppContext();

  if (isMenuSmall) {
    return (
      <StyleMenu>
        {MENU_SMALL.map(({ name, icon }) => {
          return (
            <MunuItem
              active={
                activeMenuText.toLowerCase() ===
                text[name as keyof ITranslations].toLowerCase()
              }
              className="small"
              key={name}
            >
              {icon}
              <Text>{text[name as keyof ITranslations]}</Text>
            </MunuItem>
          );
        })}
      </StyleMenu>
    );
  } else {
    return (
      <StyleMenu>
        {MENU_LARGE.map(({ title, list }, index) => {
          return (
            <>
              <LargeMenuSection>
                {title && (
                  <Text className="title">
                    {text[title as keyof ITranslations]}
                  </Text>
                )}
                {list.map(({ name, icon }) => {
                  return (
                    <MunuItem
                      active={
                        activeMenuText.toLowerCase() ===
                        text[name as keyof ITranslations].toLowerCase()
                      }
                      className="large"
                      key={name}
                    >
                      {icon}
                      <Text>{text[name as keyof ITranslations]}</Text>
                    </MunuItem>
                  );
                })}
              </LargeMenuSection>
              {index === 1 && (
                <LargeMenuSection key={index} className="text">
                  <Text>{text.signInMenuText}</Text>
                  <AuthButton />
                </LargeMenuSection>
              )}
            </>
          );
        })}
      </StyleMenu>
    );
  }
};

export default Menu;
