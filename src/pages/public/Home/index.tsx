import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import HomePic from "../../../assets/banner.png";
import GreenRunLogo from "../../../assets/GreenRun_logo.png";
import {
  Card,
  Container,
  SideContainer,
  ResponsiveContainer,
} from "./index.styles";

export const Home = () => {
  const imgProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
  });

  const cardProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 50,
  });

  return (
    <ResponsiveContainer>
      <Container>
        <animated.div style={imgProps}>
          <img alt="home" src={HomePic} width="100%" />
        </animated.div>
        <animated.div style={cardProps}>
          <Card>
            <h2>Discover Your Best Sport With Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </Card>
        </animated.div>
      </Container>
      <SideContainer>
        <img alt="logo" src={GreenRunLogo} />
      </SideContainer>
    </ResponsiveContainer>
  );
};
