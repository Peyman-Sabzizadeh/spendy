export default function Expenses({ expenses, setExpenses }) {
  function handleDeleteExpense(index) {
    setExpenses((prevExpense) => prevExpense.filter((_, i) => i !== index));
  }
  return (
    <div className="expense-list">
      <ul>
        {expenses.map((expense, index) => {
          return (
            <li key={index}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
              <button
                className="btn-delete"
                onClick={() => handleDeleteExpense(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
