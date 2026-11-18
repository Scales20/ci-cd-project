import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [number3, setNumber3] = useState(null);
  const [number4, setNumber4] = useState(null);
  const [number5, setNumber5] = useState(null);
  const [number6, setNumber6] = useState(null);
  const [number7, setNumber7] = useState(null);
  const [number8, setNumber8] = useState(null);
  const [additionResult, setAdditionResult] = useState("");
  const [subtractionResult, setSubtractionResult] = useState("");
  const [multiplicationResult, setMultiplicationResult] = useState("");
  const [divisionResult, setDivisionResult] = useState("");

  useEffect(() => {
    let sum = number1 + number2;
    setAdditionResult(sum);
  })

  useEffect(() => {
    let sum = number3 - number4;
    setSubtractionResult(sum);
  })

  useEffect(() => {
    let sum = number5 * number6;
    setMultiplicationResult(sum);
  })

  useEffect(() => {
    let sum = number7 / number8;
    setDivisionResult(sum);
  })

  return (
    <div className="App">
      <h1>Calculation app</h1>

      <p>This app functions as a simple calculator, which allows basic arithmetic; more advanced functions, such as squaring, cubing, etc. and the nth root of numbers, will be implemented.</p>

      <b>Addition:</b>
      <form id="addition">
        <input id="number1Addition" onChange={e => setNumber1(Number(e.target.value))} type="text"></input>

        <input id="number2Addition" onChange={e => setNumber2(Number(e.target.value))} type="text"></input>
      </form>
      Result: {additionResult}

      <br />
      <b>Subtraction:</b>
      <form id="addition">
        <input id="number1Addition" onChange={e => setNumber3(Number(e.target.value))} type="text"></input>

        <input id="number2Addition" onChange={e => setNumber4(Number(e.target.value))} type="text"></input>
      </form>
      Result: {subtractionResult}

      <br />
      <b>Multiplication:</b>
      <form id="addition">
        <input id="number1Addition" onChange={e => setNumber5(Number(e.target.value))} type="text"></input>

        <input id="number2Addition" onChange={e => setNumber6(Number(e.target.value))} type="text"></input>
      </form>
      Result: {multiplicationResult}

      <br />
      <b>Division:</b>
      <form id="addition">
        <input id="number1Addition" onChange={e => setNumber7(Number(e.target.value))} type="text"></input>

        <input id="number2Addition" onChange={e => setNumber8(Number(e.target.value))} type="text"></input>
      </form>
      Result: {divisionResult}
    </div>
  );
}

export default App;
