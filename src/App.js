import Nav from "./components/Nav";
import CardWrapper from "./components/CardWrapper";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "FactoryFour";
  }, []);

  return (
    <div>
      <Nav />
      <CardWrapper />
    </div>
  );
}

export default App;
