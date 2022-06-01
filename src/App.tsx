import { About } from "./components/About";
import { Assessments } from "./components/Assessments";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Assessments />
    </div>
  );
}

export default App;
