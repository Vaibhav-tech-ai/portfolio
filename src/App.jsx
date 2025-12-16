import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CardComp } from "./components/card-band/CardComp";

function App() {
  const [count, setCount] = useState(0);

  return <CardComp />;
}

export default App;
