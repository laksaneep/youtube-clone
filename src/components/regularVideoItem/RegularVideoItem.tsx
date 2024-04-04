import { Video } from "pexels";
import {
  RegularVideoContents,
  RegularVideoPic,
  RegularVideoThumnail,
  RegularVideoTitle,
  StyledRegularVideoItem,
  TimeContainer,
} from "./RegularVideoItem.styles";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { getVideoTitle } from "../../utils/video";

interface IRegularVideoItemProps {
  video: Video;
}

const RegularVideoItem = ({ video }: IRegularVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall } = useAppContext();
  const VIDEO_TITLE_LENGTH = 50;

  return (
    <StyledRegularVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
    >
      <RegularVideoThumnail $isMenuSmall={isMenuSmall}>
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
        <TimeContainer>
          <Text>
            {`${Math.floor(video.duration / 60)}:${Math.floor(
              video.duration % 60
            )}`}
          </Text>
        </TimeContainer>
      </RegularVideoThumnail>
      <RegularVideoContents>
        <RegularVideoPic>
          <img src={video.image} alt="profile picture" />
        </RegularVideoPic>
        <RegularVideoTitle>
          <Text className="videoItemTitle">
            {getVideoTitle(video.url).slice(0, VIDEO_TITLE_LENGTH)}
            {getVideoTitle(video.url).length > VIDEO_TITLE_LENGTH && "..."}
          </Text>
          <Text className="name">{video.user.name}</Text>
          <Text className="details">
            {video.duration}M views{" "}
            <span className="dot">&#9679; 2 hours ago</span>
          </Text>
        </RegularVideoTitle>
      </RegularVideoContents>
    </StyledRegularVideoItem>
  );
};

export default RegularVideoItem;
