import Heart from "../../../assets/heart.png";
import Vector from "../../../assets/vector.png";
import {
  CardImage,
  CardTitle,
  CardTitleContainer,
  DisLikeButton,
  LikeButton,
  SportsButton,
  SportCard,
} from "./index.styles";

export const Card: any = ({ item }: any) => {
  return (
    <SportCard>
      <SportsButton>
        <img
          alt="strSportIconGreen"
          width="auto"
          height="30px"
          src={item?.strSportIconGreen}
        />
      </SportsButton>
      <CardImage src={item?.strSportThumb} />
      <CardTitleContainer />
      <CardTitle>{item?.strSport}</CardTitle>
      <DisLikeButton>
        <img alt="like" src={Vector} />
      </DisLikeButton>
      <LikeButton>
        <img alt="like" src={Heart} />
      </LikeButton>
    </SportCard>
  );
};
