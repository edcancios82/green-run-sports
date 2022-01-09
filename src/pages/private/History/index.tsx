import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import Liked from "../../../assets/blue_heart.png";
import LeftArrow from "../../../assets/left_arrow.png";
import UnLiked from "../../../assets/red_close.png";
import { db } from "../../../constants/firebaseConfig";
import { ThemeContext, UserContext, SportProps } from "../../../contexts";
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
  const now = new Date();

  const cardProps = useSpring({
    to: { opacity: 1, height: "100%" },
    from: { opacity: 0, height: "100%" },
    delay: 200,
  });

  const [sportsHistoryList, setSportsHistoryList] = useState<SportProps[]>([]);

  const { state: themeState } = useContext(ThemeContext);

  const { state: userState } = useContext(UserContext);

  const { uid } = userState;

  const day = now.toLocaleString("en-US", {
    day: "numeric",
  });

  const month = now.toLocaleString("en-US", {
    month: "long",
  });

  const getSportsHistory = async () => {
    let newHistory: SportProps[] = [];
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
        {sportsHistoryList?.map((item: SportProps, i) => (
          <SportItemList
            key={`sport-item-${i}`}
            liked={item.userLiked || false}
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
