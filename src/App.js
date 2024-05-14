import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { profile } from "./data";

function App() {
  return (
    <>
      <Header profile={profile} />
      <Main />
    </>
  );
}

export default App;
