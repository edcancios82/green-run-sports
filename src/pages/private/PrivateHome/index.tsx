import { useContext, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { axiosGetImages } from "../../../api/axiosRequest";
import Heart from "../../../assets/heart.png";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import Vector from "../../../assets/vector.png";
import { ThemeContext } from "../../../contexts";
import {
  CardImage,
  CardTitle,
  CardTitleContainer,
  DisLikeButton,
  LikeButton,
  SportsButton,
  ThemeButton,
} from "./index.styles";

export const PrivateHome = () => {
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);
  const [sportsList, setSportsList] = useState<any[]>([]);
  const [sportsHistoryList, setSportsHistoryList] = useState<any[]>([]);

  const cardProps = useSpring({
    to: { opacity: 1, height: "100%" },
    from: { opacity: 0, height: "100%" },
    delay: 200,
  });

  const handleDarkMode = () =>
    themeDispatch({
      type: "toggleThemeMode",
      mode: themeState.mode === "light" ? "dark" : "light",
    });

  useEffect(() => {
    axiosGetImages().then((response: any) => {
      const { data } = response;
      setSportsList(data?.sports);
    });
  }, []);

  const handleLike = () => {
    const newHistory = [...sportsHistoryList];
    newHistory.push({ ...sportsList?.[0], userLiked: true });
    const newList = [...sportsList];
    newList.shift();
    setSportsHistoryList(newHistory);
    setSportsList(newList);
  };

  const handleDisLike = () => {
    const newHistory = [...sportsHistoryList];
    newHistory.push({ ...sportsList?.[0], userLiked: false });
    const newList = [...sportsList];
    newList.shift();
    setSportsHistoryList(newHistory);
    setSportsList(newList);
  };

  return (
    <animated.div style={cardProps}>
      <CardImage src={sportsList?.[0]?.strSportThumb} />

      <ThemeButton onClick={handleDarkMode}>
        <img alt="theme" src={themeState.mode === "light" ? Moon : Sun} />
      </ThemeButton>
      <SportsButton>
        <img
          alt="strSportIconGreen"
          width="auto"
          height="30px"
          src={sportsList?.[0]?.strSportIconGreen}
        />
      </SportsButton>
      <CardTitleContainer />
      <CardTitle>{sportsList?.[0]?.strSport}</CardTitle>
      <DisLikeButton onClick={handleDisLike}>
        <img alt="like" src={Vector} />
      </DisLikeButton>
      <LikeButton onClick={handleLike}>
        <img alt="like" src={Heart} />
      </LikeButton>
    </animated.div>
  );
};
