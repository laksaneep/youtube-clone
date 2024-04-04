import { Video } from "pexels";
import {
  MoreLessButton,
  MoreLessContainer,
  ShortVideoContainer,
  StyledVideoShort,
  VideoShortHeader,
} from "./VideoShort.styles";
import { SiYoutubeshorts } from "react-icons/si";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ShortVideoItem from "../shortVideoItem/ShortVideoItem";

interface IVideoShortProps {
  videos: Video[];
}

const VideoShort = (props: IVideoShortProps) => {
  const [showLess, setShowLess] = useState(true);
  const shortVideoList = showLess
    ? props.videos.slice(0, props.videos.length / 2)
    : props.videos;
  const { text } = useAppContext();

  return (
    <StyledVideoShort>
      <VideoShortHeader>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortHeader>
      <ShortVideoContainer>
        {shortVideoList.map((video, index) => (
          <ShortVideoItem video={video}></ShortVideoItem>
        ))}
      </ShortVideoContainer>
      <MoreLessContainer>
        <MoreLessButton onClick={() => setShowLess((state) => !state)}>
          <Text>{showLess ? text.showMore : text.showLess}</Text>
          {showLess ? (
            <IoIosArrowDown className="icon" size={20} />
          ) : (
            <IoIosArrowUp className="icon" size={20} />
          )}
        </MoreLessButton>
      </MoreLessContainer>
    </StyledVideoShort>
  );
};

export default VideoShort;
