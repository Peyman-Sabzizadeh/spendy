export default function Form({
  title,
  setTitle,
  amount,
  setAmount,
  onAddExpenses,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onAddExpenses({ title, amount });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Expense title..."
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Expense amount..."
      />
      <button>Add</button>
    </form>
  );
}
