import React from "react";

import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((counter) => {
    // console.log(counter);
    return counter.counter;
  });

  //get the counter value from the Redux store
  return <div data-testid="counterValue">counter : {counter}</div>;
};

export default CounterValue;
 