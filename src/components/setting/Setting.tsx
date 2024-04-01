import { StyleSetting, SettingItemStyle } from "./Setting.styles";
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";

const Setting = () => {
  const { theme, changeTheme, language, toggleLangauge, text } =
    useAppContext();

  const SETTINGS = [
    {
      label: text.language,
      icon: <HiLanguage size={23} />,
      value: language === "english" ? text.english : text.french,
      onClick: () => toggleLangauge(),
    },
    {
      label: text.appearance,
      icon: <GoMoon size={23} />,
      value: theme === "dark" ? text.dark : text.light,
      onClick: () => changeTheme(theme),
    },
  ];

  return (
    <StyleSetting>
      {SETTINGS.map(({ label, icon, value, onClick }) => {
        return (
          <SettingItemStyle onClick={onClick}>
            {icon}
            <Text>{`${label} : ${value}`}</Text>
          </SettingItemStyle>
        );
      })}
    </StyleSetting>
  );
};

export default Setting;
