export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Expense title..." />
      <input type="number" placeholder="Expense amount..." />
      <textarea placeholder="Expense description...." maxLength={40} />
      <button>Add</button>
    </form>
  );
}
