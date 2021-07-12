import * as React from "react";
import { Flex, FlexItem } from "../Flex";

export const InnerScreen: React.FunctionComponent = (props) => {
  const flexStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
  };

  return (
    <FlexItem flexShrink={0}>
      <Flex style={flexStyles} flexWrap="wrap" flexDirection="column">
        {props.children}
      </Flex>
    </FlexItem>
  );
};
