import { Text } from "../../utils/Text.styles";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import {
  LeftSection,
  MoreSection,
  SearchBar,
  SearchSection,
  StyleHeader,
} from "./Header.styles";
import { Icons } from "../../utils/Icons.styles";
import AuthButton from "../authButton/AuthButton";
import Setting from "../setting/Setting";
import { MouseEventHandler, useEffect, useState } from "react";
import { useAppContext } from "../../context/App.context";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Header = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { text, setSearchBarText, toggleMenuSize } = useAppContext();
  const {
    transcript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setSearchText(transcript);
    setSearchBarText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <StyleHeader>
      <LeftSection>
        <Icons className="menu" onClick={() => toggleMenuSize()}>
          <SlMenu size={17} />
        </Icons>
        <FaYoutube size={30} color="#FF0000" />
        <Text className="logo">Youtube</Text>
      </LeftSection>
      <SearchSection>
        <SearchBar>
          <input
            value={searchText}
            placeholder={text.search}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Icons
            data-tooltip-id="search"
            data-tooltip-content={text.search}
            onClick={() => setSearchBarText(searchText)}
          >
            <LuSearch size={19} />
          </Icons>
        </SearchBar>
        {/* FIXME: react-speech-recognization don't work  */}
        {/* <Icons
          data-tooltip-id="voiceSearch"
          data-tooltip-content={text.voiceSearch}
          onClick={
            SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>
          }
          $showBackground
          className={listening ? "listening" : "  "}
        >
          <FaMicrophone size={19} />
        </Icons> */}
      </SearchSection>
      <MoreSection>
        <Icons
          onClick={() => {
            setShowSetting((currentState) => !currentState);
          }}
          data-tooltip-id="setting"
          data-tooltip-content="Settings"
        >
          <CgMoreVerticalAlt size={19} />
        </Icons>
        <AuthButton />
        {showSetting && <Setting />}
      </MoreSection>
    </StyleHeader>
  );
};

export default Header;
