import * as React from "react";
import { Flex } from "../Flex";

interface NavProps {
  style?: React.CSSProperties;
}

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <Flex justifyContent="space-around" style={props.style}>
      {props.children}
    </Flex>
  );
};
