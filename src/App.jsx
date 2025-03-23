import Header from "./components/Header";
import Expenses from "./components/main/Expenses";
import Form from "./components/main/Form";
export default function App() {
  return (
    <div className="container">
      <div>
        <Header />
        <Form />
      </div>
      <div>
        <Expenses />
      </div>
    </div>
  );
}
