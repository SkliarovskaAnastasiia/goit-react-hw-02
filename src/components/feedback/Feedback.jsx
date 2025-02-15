import css from "./Feedback.module.css";

export default function Feedback({ feedback: { good, neutral, bad } }) {
  return (
    <ul className={css.feedbackList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
  );
}
