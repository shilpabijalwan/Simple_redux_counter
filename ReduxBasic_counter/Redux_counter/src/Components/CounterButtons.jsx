import React from "react";
import { Button, ButtonGroup, Box, Spacer } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(handleAddActionObj(1));
  };
  const handleReduce = () => {
    dispatch(handleReduceActionObj(1));
  };
  return (
    <Box
      data-testid="counterButtons"
      width={400}
      m={"auto"}
    >
      <Spacer />
      <Button
        mr={10}
        colorScheme="teal"
        size="sm"
        data-testid="addButton"
        onClick={handleAdd}
      >
        ADD
      </Button>

      <Button
        colorScheme="teal"
        size="sm"
        data-testid="reduceButton"
        onClick={handleReduce}
      >
        REDUCE
      </Button>
    </Box>
    // <div data-testid="counterButtons">
    //   <button
    //     data-testid="reduceButton"
    //     onClick={handleReduce}
    //   >
    //     REDUCE
    //   </button>
    // </div>
  );
};

export default CounterButtons;
