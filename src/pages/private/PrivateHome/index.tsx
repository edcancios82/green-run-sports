import { useDrag } from "@use-gesture/react";
import { useContext, useEffect, useState, useRef } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { axiosGetImages } from "../../../api/axiosRequest";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import { SportsContext, ThemeContext } from "../../../contexts";
import { Card } from "./Card";
import { ThemeButton } from "./index.styles";
import _ from "lodash";

import styles from "./styles.module.css";

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

export const PrivateHome = () => {
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

  const index = useRef(0);
  const width = window.innerWidth;

  const [props, api] = useSprings(sportsList.length, (i) => ({
    x: i * width,
    scale: 1,
    display: "block",
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (active && Math.abs(mx) > width / 2) {
        index.current = _.clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          sportsList.length - 1
        );
        cancel();
      }
      api.start((i) => {
        console.log('chamou api start')
        console.log(active, 'active')

        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - Math.abs(mx) / width / 2 : 1;
        if (xDir > 0) {
          handleOption(true);
        } else if (xDir < 0) {
          handleOption(false);
        }
        return { x, scale, display: "block" };
      });
    }
  );

  return (
    <>
      <ThemeButton onClick={handleDarkMode}>
        <img alt="theme" src={themeState.mode === "light" ? Moon : Sun} />
      </ThemeButton>
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          className={styles.page}
          {...bind()}
          key={i}
          style={{ display, x }}
        >
          <animated.div style={{ scale }}>
            <Card
              item={sportsList[i]}
              style={{ width: "100%", height: "100%" }}
            />
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};
