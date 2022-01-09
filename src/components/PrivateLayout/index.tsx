import { FC } from "react";
import { Link } from "react-router-dom";
import History from "../../assets/history.png";
import Home from "../../assets/home.png";
import Notes from "../../assets/notes.png";
import Profile from "../../assets/profile.png";
import GreenRunLogo from "../../assets/GreenRun_logo.png";
import { ActionButton, Container, Footer, Preview } from "./index.styles";
import { ResponsiveContainer, SideContainer } from "../../pages/public/Home/index.styles";

export const PrivateLayout: FC = ({ children }) => {
  return (
    <ResponsiveContainer>
      <Container>
        <Preview>{children}</Preview>
        <Footer>
          <Link to="/">
            <ActionButton>
              <img alt="home" src={Home} />
            </ActionButton>
          </Link>
          <Link to="/history">
            <ActionButton>
              <img alt="history" src={History} />
            </ActionButton>
          </Link>
          <Link to="/notes">
            <ActionButton>
              <img alt="notes" src={Notes} />
            </ActionButton>
          </Link>
          <Link to="/profile">
            <ActionButton>
              <img alt="profile" src={Profile} />
            </ActionButton>
          </Link>
        </Footer>
      </Container>
      <SideContainer>
      <img alt="logo" src={GreenRunLogo} />
      </SideContainer>
    </ResponsiveContainer>
  );
};
