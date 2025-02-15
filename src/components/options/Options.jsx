import css from "./Options.module.css";

export default function Options() {
  return (
    <ul className={css.btnList}>
      <li>
        <button type="button">Good</button>
      </li>
      <li>
        <button type="button">Neutral</button>
      </li>
      <li>
        <button type="button">Bad</button>
      </li>
    </ul>
  );
}
