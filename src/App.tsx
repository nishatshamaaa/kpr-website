import AppContainer from "./components/AppContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Description from "./components/sections/Description";
import Intro from "./components/sections/Intro";
import PhoneLines from "./components/sections/PhoneLines";

function App() {
  return (
    <>
      <NavBar />
      <AppContainer>
        <Intro />
        <PhoneLines />
        <Description />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
