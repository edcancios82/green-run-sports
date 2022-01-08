import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import HomePic from "../../../assets/banner.png";
import { Card, Container } from "./index.styles";

export const Home = () => {
  const imgProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  const cardProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });

  return (
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
  );
};
