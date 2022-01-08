import { useContext, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { axiosGetImages } from "../../../api/axiosRequest";
import Heart from "../../../assets/heart.png";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import Vector from "../../../assets/vector.png";
import { SportsContext, ThemeContext } from "../../../contexts";
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
  const cardProps = useSpring({
    to: { opacity: 1, height: "100%" },
    from: { opacity: 0, height: "100%" },
    delay: 200,
  });

  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);

  const { state: sportsState, dispatch: sportsDispatch } =
    useContext(SportsContext);

  const { sportsList } = sportsState;

  const handleDarkMode = () =>
    themeDispatch({
      type: "toggleThemeMode",
      mode: themeState.mode === "light" ? "dark" : "light",
    });

  const handleOption = (option: boolean) =>
    sportsDispatch({ type: "setSportsOption", option });

  useEffect(() => {
    if (!sportsList.length) {
      axiosGetImages().then((response: any) => {
        const { data } = response;
        sportsDispatch({ type: "setSportsData", sportsList: data?.sports });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sportsList]);

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
      <DisLikeButton onClick={() => handleOption(false)}>
        <img alt="like" src={Vector} />
      </DisLikeButton>
      <LikeButton onClick={() => handleOption(true)}>
        <img alt="like" src={Heart} />
      </LikeButton>
    </animated.div>
  );
};
