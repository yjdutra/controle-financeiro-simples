import { useState } from "react";
import * as C from "./styles";

export function Form({ handleAdd }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("informe a descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem de ser positivo");
      return;
    }
  };

  const transaction = {
    id: generateID(),
    desc: desc,
    amount: amount,
    expense: isExpense,
  };

  handleAdd(transaction);
  setDesc("");
  setAmount("");

  return (
    <C.Container>
      <C.Describe
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Descrição"
      />
      <C.Value
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Valor"
      />

      <C.RadioContent>
        <C.Label htmlFor="rIncome">Entrada</C.Label>
        <C.Radio
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
      </C.RadioContent>

      <C.RadioContent>
        <C.Label htmlFor="rExpenses">Saida</C.Label>
        <C.Radio
          type="radio"
          id="rExpenses"
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
      </C.RadioContent>
      <C.Add onClick={handleSave}> Send </C.Add>
    </C.Container>
  );
}
