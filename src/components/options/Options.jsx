export default function Options({ children, onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
