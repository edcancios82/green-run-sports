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
  ProfileButton,
} from "./index.styles";
import { Link } from "react-router-dom";

export const PrivateLayout: FC = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
      <Footer />
      <Link to="/">
        <HomeButton>
          <img alt="home" src={Home} />
        </HomeButton>
      </Link>
      <Link to="/history">
        <HistoryButton>
          <img alt="history" src={History} />
        </HistoryButton>
      </Link>
      <Link to="/notes">
        <NotesButton>
          <img alt="notes" src={Notes} />
        </NotesButton>
      </Link>
      <Link to="/profile">
        <ProfileButton>
          <img alt="profile" src={Profile} />
        </ProfileButton>
      </Link>
    </Container>
  );
};
