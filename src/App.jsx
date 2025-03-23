import { useState, useEffect } from "react";
import Header from "./components/Header";
import Expenses from "./components/main/Expenses";
import Form from "./components/main/Form";
export default function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function handleAddExpense(expense) {
    setExpenses([...expenses, expense]);
    setTitle("");
    setAmount("");
  }
  return (
    <div className="container">
      <div>
        <Header />
        <Form
          title={title}
          setTitle={setTitle}
          amount={amount}
          setAmount={setAmount}
          onAddExpenses={handleAddExpense}
        />
      </div>
      <div>
        <Expenses
          title={title}
          amount={amount}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </div>
    </div>
  );
}
