import { useState } from "react";
import {
  ShortVideoItemContainer,
  ShortVideoThumnail,
} from "./ShortVideoItem.styles";
import { useAppContext } from "../../context/App.context";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { getVideoTitle } from "../../utils/video";
import { Text } from "../../utils/Text.styles";

interface IShortVideoItem {
  video: Video;
}

const ShortVideoItem = ({ video }: IShortVideoItem) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall } = useAppContext();
  const VIDEO_TITLE_LENGTH = 50;

  return (
    <ShortVideoItemContainer
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
    >
      <ShortVideoThumnail $isMenuSmall={isMenuSmall}>
        {playTrailer ? (
          <ReactPlayer
            width="100%"
            height="100%"
            controls={false}
            volume={1}
            muted={false}
            style={{ height: "100%", width: "100%" }}
            playing={playTrailer}
            url={video.video_files[0].link}
          />
        ) : (
          <img src={video.image} alt="thumnail" />
        )}
      </ShortVideoThumnail>
      <Text className="videoItemTitle">
        {getVideoTitle(video.url).slice(0, VIDEO_TITLE_LENGTH)}
        {getVideoTitle(video.url).length > VIDEO_TITLE_LENGTH && "..."}
      </Text>

      <Text className="details">{video.duration}M views</Text>
    </ShortVideoItemContainer>
  );
};

export default ShortVideoItem;
