import * as React from "react";
import "./Tree.css";

export interface TreeProps extends Omit<Partial<HTMLDivElement>, "style"> {
  style?: React.CSSProperties;
}

export const Tree: React.FC<TreeProps> = (props) => {
  return (
    <div style={props.style} className="tree">
      <div className="trunk">
        <div className="wood">
          <div className="inner-wood"></div>
        </div>
      </div>
      <div className="leaves">
        <div className="low">
          <div className="medium">
            <div className="top"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
