import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import './App.css';

const count = atom({
  key: "count",
  default: 0
});

const isEvenCount = selector({
  key: "evenCount",
  get: ({ get }) => {
    const state = get(count);
    if (state % 2 === 0){
      return "yes"
    } else {
      return "no"
    }
  }
})

const isOddCount = selector({
  key: "oddCount",
  get: ({ get }) => {
    const state = get(count);
    if (state % 2 !== 0){
      return "yes"
    } else {
      return "no"
    }
  }
})

console.log({count, isEvenCount })

function App() {
  const [countState, setCount ] = useRecoilState(count);
  const isEven = useRecoilValue(isEvenCount)
  const isOdd = useRecoilValue(isOddCount)

  return (
    <div className="App">
      <h1> {countState} </h1>
      <button onClick={() => setCount(count => count + 1)}>Increase Number</button>
      <p>{`Is this even? ${isEven}`}</p>
      <p>{`Is this odd? ${isOdd}`}</p>
    </div>
  );
}

export default App;
