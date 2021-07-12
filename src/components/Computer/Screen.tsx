import * as React from "react";
import { Flex } from "../Flex";

export interface ScreenProps {
  style?: React.CSSProperties;
}

export const Screen: React.FunctionComponent<ScreenProps> = (props) => {
  const styles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    ...props.style,
  };
  return <Flex style={styles}>{props.children}</Flex>;
};
