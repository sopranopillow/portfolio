import * as React from "react";
import "./Pinetree.css";

export interface PinetreeProps extends Omit<Partial<HTMLDivElement>, "style"> {
  style?: React.CSSProperties;
}

export const Pinetree: React.FC<PinetreeProps> = (props) => {
  return (
    <div style={props.style} className="tree">
      <div className="pine-trunk">
        <div className="pine-wood">
          <div className="pine-inner-wood"></div>
        </div>
      </div>
      <div className="pine-leaves">
        <div className="pine-low">
          <div className="pine-low-inner1"></div>
          <div className="pine-low-inner2"></div>
        </div>
        <div className="pine-medium">
          <div className="pine-medium-inner1"></div>
          <div className="pine-medium-inner2"></div>
        </div>
        <div className="pine-top">
          <div className="pine-top-inner1"></div>
          <div className="pine-top-inner2"></div>
          <div className="pine-top-point"></div>
        </div>
      </div>
    </div>
  );
};
