import React from "react";
import { Container } from "./index.styles";
import { useSpring, animated } from "react-spring";

export const Home = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });
  return (
    <Container>
      <animated.div style={props}>I will fade in</animated.div>
    </Container>
  );
};
