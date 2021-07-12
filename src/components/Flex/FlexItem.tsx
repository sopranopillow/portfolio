import * as React from "react";

export interface FlexItemProps {
  order?: number; // Default: 0
  flexGrow?: number; // Default: 0
  flexShrink?: number; // Default: 1
  flexBasis?: string; // Default: auto; can be percentage or em
  alignSelf?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"; // Default: auto
  style?: React.CSSProperties;
}

export const FlexItem: React.FunctionComponent<FlexItemProps> = (props) => {
  const { order, flexGrow, flexShrink, flexBasis, alignSelf, style } = props;
  const newStyles: React.CSSProperties = {
    order: order ? order : 0,
    flexGrow: flexGrow ? flexGrow : 0,
    flexShrink: flexShrink ? flexShrink : 1,
    flexBasis: flexBasis ? flexBasis : "auto",
    alignSelf: alignSelf ? alignSelf : "auto",
    ...style,
  };

  return <div style={newStyles}>{props.children}</div>;
};
