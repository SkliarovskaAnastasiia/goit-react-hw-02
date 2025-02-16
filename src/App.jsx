import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";

function App() {
  const [click, setClick] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");

    if (savedFeedback !== null) return JSON.parse(savedFeedback);

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = click.good + click.neutral + click.bad;
  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(click));
  }, [click]);

  return (
    <>
      <Description />
      <ul className="btnList">
        <Options onClick={() => updateFeedback("good")}>Good</Options>
        <Options onClick={() => updateFeedback("neutral")}>Neutral</Options>
        <Options onClick={() => updateFeedback("bad")}>Bad</Options>

        {totalFeedback > 0 && <Options onClick={resetFeedback}>Reset</Options>}
      </ul>

      {totalFeedback ? (
        <Feedback
          feedback={click}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
