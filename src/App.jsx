import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useRef } from "react";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const inputVal = useRef();

  const handeSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(+inputVal.current.value));
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form onSubmit={handeSubmit}>
        <input ref={inputVal} type="text" />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
