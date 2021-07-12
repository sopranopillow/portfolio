import * as React from "react";
import { FlexItem } from "../Flex";

interface NavItemProps {
  style?: React.CSSProperties;
}

export const NavItem: React.FunctionComponent<NavItemProps> = (props) => {
  return <FlexItem style={props.style}>{props.children}</FlexItem>;
};
