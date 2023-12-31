import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    setCounter( current => current + value )
  }
  const reset = () => {
    setCounter( initialValue )
  }
  const decrement = (value = 1) => {
    if ( counter <= 0 ) return;
    setCounter( current => current - value )
  }

  const random = (min = 0, max = 1) => {
    setCounter( Math.floor(Math.random() * (max - min) + min) );
  }

  return {
    counter,
    increment,
    reset,
    random,
    decrement
  }
}
