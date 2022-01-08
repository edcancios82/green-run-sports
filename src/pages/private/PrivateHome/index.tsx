import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { axiosGetImages } from "../../../api/axiosRequest";
import Heart from "../../../assets/heart.png";
import Moon from "../../../assets/moon.png";
import Sun from "../../../assets/sun.png";
import Vector from "../../../assets/vector.png";
import { db } from "../../../constants/firebaseConfig";
import { SportsContext, ThemeContext, UserContext } from "../../../contexts";
import { Card } from "./Card";
import {
  ContainerButtons,
  DisLikeButton,
  LikeButton,
  ThemeButton,
} from "./index.styles";

export const PrivateHome = () => {
  const [sportsHistoryList, setSportsHistoryList] = useState<any[] | null>(
    null
  );
  const [{ x: rx, y: ry }, rApi] = useSpring(() => ({ x: 0, y: 0 }));
  const [{ x: lx, y: ly }, lApi] = useSpring(() => ({ x: 0, y: 0 }));

  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);

  const { state: sportsState, dispatch: sportsDispatch } =
    useContext(SportsContext);

  const { state: stateUser } = useContext(UserContext);

  const { uid } = stateUser;
  const { sportsList } = sportsState;

  const sendToFirebase = (item: any) => {
    addDoc(collection(db, uid), {
      ...item,
    });
  };

  const handleOption = (option: boolean) => {
    sendToFirebase({ ...sportsList[0], userLiked: option });
    sportsDispatch({ type: "removeFirstOption" });
  };

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

  const handleDarkMode = () => {
    themeDispatch({
      type: "toggleThemeMode",
      mode: themeState.mode === "light" ? "dark" : "light",
    });
  };

  const getSportsHistory = async () => {
    let newHistory: any[] = [];
    const querySnapshot = await getDocs(collection(db, uid));

    querySnapshot.forEach((doc) => {
      newHistory.push(doc.data());
    });

    setSportsHistoryList(newHistory);
  };

  useEffect(() => {
    getSportsHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!sportsList.length && Array.isArray(sportsHistoryList)) {
      axiosGetImages().then((response: any) => {
        const { data } = response;
        const { sports } = data;

        const filteredData = sports.filter((item: any) => {
          const found = sportsHistoryList.find(
            (stored) => stored.idSport === item.idSport
          );
          if (found) {
            return false;
          }
          return true;
        });
        sportsDispatch({ type: "setSportsData", sportsList: filteredData });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sportsHistoryList]);

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
