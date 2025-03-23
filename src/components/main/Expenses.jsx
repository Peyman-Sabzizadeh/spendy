export default function Expenses() {
  return (
    <div className="expense-list">
      <ul>
        <li>
          <span>Title</span>
          <span>Amount</span>
          <button className="btn-delete">Delete</button>
        </li>
      </ul>
    </div>
  );
}
