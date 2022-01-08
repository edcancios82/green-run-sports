import { useDrag } from "@use-gesture/react";
import { useContext, useEffect } from "react";
import { animated } from "react-spring";
import { axiosGetImages } from "../../../api/axiosRequest";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import { SportsContext, ThemeContext } from "../../../contexts";
import { Card } from "./Card";
import { ThemeButton } from "./index.styles";

export const PrivateHome = () => {
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);

  const { state: sportsState, dispatch: sportsDispatch } =
    useContext(SportsContext);

  const { sportsList } = sportsState;

  const handleOption = (option: boolean) =>
    sportsDispatch({ type: "setSportsOption", option });

  const bind = useDrag(({ down, tap, movement: [x] }) => {
    if (!down && tap) {
      return { x };
    }

    if (down) {
      return { x };
    } else {
      handleOption(x > 0);
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
      <animated.div {...bind()}>
        <Card item={sportsList[0]} />
      </animated.div>
    </>
  );
};
