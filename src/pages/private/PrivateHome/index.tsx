import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useContext, useEffect } from "react";
import { axiosGetImages } from "../../../api/axiosRequest";
import Heart from "../../../assets/heart.png";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import Vector from "../../../assets/vector.png";
import { SportsContext, ThemeContext } from "../../../contexts";
import { Card } from "./Card";
import {
  ContainerButtons, DisLikeButton,
  LikeButton,
  ThemeButton
} from "./index.styles";

export const PrivateHome = () => {
  const [{ x: rx, y: ry }, rApi] = useSpring(() => ({ x: 0, y: 0 }));
  const [{ x: lx, y: ly }, lApi] = useSpring(() => ({ x: 0, y: 0 }));

  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);

  const { state: sportsState, dispatch: sportsDispatch } =
    useContext(SportsContext);

  const { sportsList } = sportsState;

  const handleOption = (option: boolean) =>
    sportsDispatch({ type: "setSportsOption", option });

  const bindLike = useDrag(({ down, tap, movement: [x] }) => {
    rApi.start({ x: down ? x : 0, immediate: down });

    if (!down && tap) {
      return { x };
    }

    if (down) {
      return { x };
    } else {
      x > 0 && handleOption(true);
    }
  });

  const bindDisLike = useDrag(({ down, tap, movement: [x] }) => {
    lApi.start({ x: down ? x : 0, immediate: down });

    if (!down && tap) {
      return { x };
    }

    if (down) {
      return { x };
    } else {
      x < 0 && handleOption(false);
    }
  });

  const handleDarkMode = () =>
    themeDispatch({
      type: "toggleThemeMode",
      mode: themeState.mode === "light" ? "dark" : "light",
    });

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
    <>
      <ThemeButton onClick={handleDarkMode}>
        <img alt="theme" src={themeState.mode === "light" ? Moon : Sun} />
      </ThemeButton>
      <Card item={sportsList[0]} />
      <ContainerButtons>
        <animated.div {...bindDisLike()} style={{ x: lx, y: ly }}>
          <DisLikeButton>
            <img alt="like" src={Vector} />
          </DisLikeButton>
        </animated.div>
        <animated.div {...bindLike()} style={{ x: rx, y: ry }}>
          <LikeButton>
            <img alt="like" src={Heart} />
          </LikeButton>
        </animated.div>
      </ContainerButtons>
    </>
  );
};
