import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { auth } from "../../../constants/firebaseConfig";
import { UserContext } from "../../../contexts";
import {
  Card,
  CardFooter,
  Container,
  InputEmailContainer,
  InputPasswordContainer
} from "./index.styles";

export const Login = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const cardProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  const handleSignIn = () => {
    if (userName.length && password.length) {
      createUserWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid } = user;
          userDispatch({
            type: "setUserData",
            uid,
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            signInWithEmailAndPassword(auth, userName, password)
              .then((userCredential) => {
                const user = userCredential.user;
                const { uid } = user;
                userDispatch({
                  type: "setUserData",
                  uid,
                });
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage, "errorMessage in Login");
              });
          } else {
            console.log(errorMessage, "errorMessage in Register new user");
          }
        });
    }
  };

  return (
    <Container>
      <animated.div style={cardProps}>
        <Card>
          <h2>Welcome</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <InputEmailContainer>
            <p>User</p>
            <input type="email" onChange={(e) => setUserName(e.target.value)} />
          </InputEmailContainer>
          <InputPasswordContainer>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputPasswordContainer>
          <CardFooter>
            <p>Forgot your password?</p>
            <Link to="/login">
              <button onClick={handleSignIn}>Login</button>
            </Link>
          </CardFooter>
        </Card>
      </animated.div>
    </Container>
  );
};
