import { FC } from "react";
import History from "../../assets/history.png";
import Home from "../../assets/home.png";
import Notes from "../../assets/notes.png";
import Profile from "../../assets/profile.png";
import {
  Container,
  Footer,
  HistoryButton,
  HomeButton,
  NotesButton,
  ProfileButton
} from "./index.styles";

export const PrivateLayout: FC = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
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
