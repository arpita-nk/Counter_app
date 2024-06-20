import { useDispatch, useSelector } from "react-redux"
import "../App.css"
import { Decrement, Increment } from "../redux/actions"

function Counter() {
  const counterValue = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="counter">
      <button className="increase" onClick={() => dispatch(Increment())}>
        +
      </button>
      <div className="value">{counterValue}</div>
      <button className="decrease" onClick={() => dispatch(Decrement)}>
        -
      </button>
    </div>
  )
}

export default Counter
