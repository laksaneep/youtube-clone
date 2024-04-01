import React from "react";
import { StyledBackdrop, StyledContents } from "./Contents.styles";
import Catagories from "../catagories/Catagories";
import { useAppContext } from "../../context/App.context";
import HomepageVideo from "../homepageVideo/HomepageVideo";

const Contents = () => {
  const { isFetchingVideo } = useAppContext();

  return (
    <StyledContents>
      <Catagories />
      <HomepageVideo />
      {isFetchingVideo && <StyledBackdrop />}
    </StyledContents>
  );
};

export default Contents;
