import {
  CardImage,
  CardTitle,
  CardTitleContainer,
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
    </SportCard>
  );
};
