import * as React from "react";
import "./Campfire.css";

export const Campfire: React.FC = () => {
  const campfireSize = window.innerWidth / 4;
  const campfireLeft = window.innerWidth / 2 - campfireSize / 2;
  const campfireTop = window.innerHeight / 4;
  const glowStyles: React.CSSProperties = {
    position: "absolute",
    boxShadow: `0 0 75px 75px #a3200f, 0 0 150px 150px #fdce66`,
    top: `240px`,
    left: `184px`,
    width: `1px`,
    height: `1px`,
    borderRadius: `50%`,
    opacity: 0.7,
  };

  return (
    <div
      style={{
        width: `${campfireSize}px`,
        height: `${campfireSize}px`,
        left: `${campfireLeft}px`,
        top: `${campfireTop}px`,
      }}
      className="campfire"
    >
      <div style={glowStyles}></div>
      <div className="logs">
        <div className="log-4">
          <div className="log">
            <div className="end-1">
              <div className="inner-end"></div>
            </div>
          </div>
        </div>
        <div className="log-3">
          <div className="log">
            <div className="end-1">
              <div className="inner-end"></div>
            </div>
          </div>
        </div>
        <div className="log-2">
          <div className="log">
            <div className="end-1">
              <div className="inner-end"></div>
            </div>
          </div>
        </div>
        <div className="log-1">
          <div className="log">
            <div className="end-1">
              <div className="inner-end"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fire">
        <div className="flame">
          <div className="outer-flame">
            <div className="medium-flame">
              <div className="inner-flame"></div>
            </div>
          </div>
        </div>
        <div className="spark-1">
          <div className="outer-flame">
            <div className="medium-flame">
              <div className="inner-flame"></div>
            </div>
          </div>
        </div>
        <div className="spark-2">
          <div className="outer-flame">
            <div className="medium-flame">
              <div className="inner-flame"></div>
            </div>
          </div>
        </div>
        <div className="spark-3">
          <div className="outer-flame">
            <div className="medium-flame">
              <div className="inner-flame"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
