import { ThemeProvider, UserProvider } from "./contexts";
import { ThemeStylesWrapper } from "./wrappers";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <ThemeStylesWrapper />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
