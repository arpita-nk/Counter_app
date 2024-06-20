import { DECREMENT, INCREMENT } from "./actionTypes"

const Increment = () => {
  return {
    type: INCREMENT,
  }
}

const Decrement = () => {
  return {
    type: DECREMENT,
  }
}

export { Increment, Decrement }
