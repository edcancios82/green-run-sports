import { useContext } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import Liked from "../../../assets/blue_heart.png";
import LeftArrow from "../../../assets/left_arrow.png";
import UnLiked from "../../../assets/red_close.png";
import { SportsContext, ThemeContext } from "../../../contexts";
import {
  BackButton,
  DateTitle,
  ScreenDescription,
  ScreenTitle,
  SportItemList,
  SportList,
  SportTitle,
} from "./index.styles";

export const History = () => {
  const cardProps = useSpring({
    to: { opacity: 1, height: "100%" },
    from: { opacity: 0, height: "100%" },
    delay: 200,
  });

  const { state: themeState } = useContext(ThemeContext);

  const { state: sportsState } = useContext(SportsContext);

  const { sportsHistoryList } = sportsState;
  
  const now = new Date();

  const day = now.toLocaleString("en-US", {
    day: "numeric",
  });

  const month = now.toLocaleString("en-US", {
    month: "long",
  });

  return (
    <animated.div style={cardProps}>
      <Link to="/">
        <BackButton isDark={themeState.mode === "dark"}>
          <img alt="left_arrow" src={LeftArrow} />
        </BackButton>
      </Link>
      <ScreenTitle>History</ScreenTitle>
      <ScreenDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ScreenDescription>
      <DateTitle>{`${day} ${month}`}</DateTitle>
      <SportList>
        {sportsHistoryList?.map((item) => (
          <SportItemList
            liked={item.userLiked}
            isDark={themeState.mode === "dark"}
          >
            <img
              alt="sport_img"
              height="auto"
              width="auto"
              src={item.strSportThumb}
            />
            <SportTitle>{item.strSport}</SportTitle>
            <div>
              <img alt="user_option" src={item.userLiked ? Liked : UnLiked} />
            </div>
          </SportItemList>
        ))}
      </SportList>
    </animated.div>
  );
};
