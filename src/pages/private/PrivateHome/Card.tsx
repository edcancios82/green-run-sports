import { FC } from "react";
import {
  CardImage,
  CardTitle,
  CardTitleContainer,
  SportCard,
  SportsButton,
} from "./index.styles";
import { SportProps } from "../../../contexts";

interface CardProps {
  item: SportProps;
}

export const Card: FC<CardProps> = ({ item }) => {
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
    </SportCard>
  );
};
