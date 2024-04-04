import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import VideoShort from "../videoShort/VideoShort";
import { RegularVideoThumnail, StyledHomePageVideo } from "./Homepage.styles";

const HomepageVideo = () => {
  const { video } = useAppContext();

  const FIRST_VIDEO_SECTION = video.slice(0, 8);
  const SECOND_VIDEO_SECTION = video.slice(8, 20);
  const THIRD_VIDEO_SECTION = video.slice(20, 28);

  return (
    <StyledHomePageVideo>
      <RegularVideoThumnail>
        {FIRST_VIDEO_SECTION.map((item, index) => (
          <RegularVideoItem video={item}></RegularVideoItem>
        ))}
      </RegularVideoThumnail>
      <VideoShort videos={SECOND_VIDEO_SECTION} />
      <RegularVideoThumnail>
        {THIRD_VIDEO_SECTION.map((item, index) => (
          <RegularVideoItem video={item}></RegularVideoItem>
        ))}
      </RegularVideoThumnail>
    </StyledHomePageVideo>
  );
};

export default HomepageVideo;
