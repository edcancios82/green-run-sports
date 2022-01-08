import { useContext, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { axiosGetImages } from "../../../api/axiosRequest";
import Heart from "../../../assets/heart.png";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import Vector from "../../../assets/vector.png";
import Home from "../../../assets/home.png";
import History from "../../../assets/history.png";
import Notes from "../../../assets/notes.png";
import Profile from "../../../assets/profile.png";

import { ThemeContext } from "../../../contexts";
import {
  CardImage,
  CardTitle,
  CardTitleContainer,
  Container,
  DisLikeButton,
  LikeButton,
  SportsButton,
  ThemeButton,
  Footer,
  HomeButton,
  HistoryButton,
  ProfileButton,
  NotesButton,
} from "./index.styles";

export const PrivateHome = () => {
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);
  const [sportsList, setSportsList] = useState<any[]>([]);
  const [sportsHistoryList, setSportsHistoryList] = useState<any[]>([]);

  const cardProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
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
    <Container>
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
      </animated.div>
      <DisLikeButton onClick={handleDisLike}>
        <img alt="like" src={Vector} />
      </DisLikeButton>
      <LikeButton onClick={handleLike}>
        <img alt="like" src={Heart} />
      </LikeButton>
      <Footer />
      <HomeButton>
        <img alt="home" src={Home} />
      </HomeButton>
      <HistoryButton>
        <img alt="history" src={History} />
      </HistoryButton>
      <NotesButton>
        <img alt="notes" src={Notes} />
      </NotesButton>
      <ProfileButton>
        <img alt="profile" src={Profile} />
      </ProfileButton>
    </Container>
  );
};
