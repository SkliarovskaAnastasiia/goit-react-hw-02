export default function Options({ update, reset, total }) {
  return (
    <ul className="btnList">
      <li>
        <button type="button" onClick={() => update("good")}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={() => update("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={() => update("bad")}>
          Bad
        </button>
      </li>
      {total > 0 && (
        <li>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
