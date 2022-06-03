import { About } from "./components/About";
import { Assessments } from "./components/Assessments";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { FormularioContato } from "./components/FormContato";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <FormularioContato />
      <Footer />
    </div>
  );
}

export default App;
