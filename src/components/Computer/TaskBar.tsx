import React from "react";
import { FlexItem, Flex } from "../Flex";

export const TaskBar: React.FunctionComponent = (props) => {
  return (
    <FlexItem
      style={{ backgroundColor: "red", width: "100%" }}
      alignSelf="flex-end"
    >
      <Flex>{props.children}</Flex>
    </FlexItem>
  );
};
