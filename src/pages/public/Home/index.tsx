import { createUserWithEmailAndPassword } from "firebase/auth";
import { animated, useSpring } from "react-spring";
import { auth } from "../../../constants/firebaseConfig";
import { Container } from "./index.styles";

export const Home = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  const handleSignIn = () => {
    createUserWithEmailAndPassword(auth, "teste@teste.com", "password")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "user");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage, "errorMessage");
      });
  };
  return (
    <Container>
      <animated.div style={props}>
        <button onClick={handleSignIn}>Register example</button>
      </animated.div>
    </Container>
  );
};
