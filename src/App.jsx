import "./App.css";
import { useState } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options />
      <Feedback feedback={click} />
    </>
  );
}

export default App;
