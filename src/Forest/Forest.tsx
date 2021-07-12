import * as React from "react";
import { Campfire } from "./Campfire";
import { Pinetree } from "./Pinetree";
import { Tree } from "./Tree";
import "./Forest.css";

export const Forest: React.FC = () => {
  const treeNum = 10;
  const randRange = { y: 50, x: 200 };
  const treeSize = window.innerWidth / 3;
  const leftForestPos = {
    x: -150,
    y: -200,
    rangeX: window.innerWidth / 3,
    rangeY: window.innerHeight - 200,
  };
  const rightForestPos = {
    x: window.innerWidth - 150,
    y: -200,
    rangeX: window.innerWidth / 3,
    rangeY: window.innerHeight - 200,
  };
  const leftForest = [];
  const rightForest = [];

  for (let r = 0; r < Math.floor(treeNum / 2); r++) {
    for (let c = 0; c < r + 1; c++) {
      const randY = Math.random() * randRange.y;
      const randX = Math.random() * randRange.x;
      const x =
        leftForestPos.x +
        randX +
        c * (leftForestPos.rangeX / Math.floor(treeNum / 2));
      const y =
        leftForestPos.y +
        randY +
        r * (leftForestPos.rangeY / Math.floor(treeNum / 2));
      const styles = {
        left: `${x}px`,
        top: `${y}px`,
        width: `${treeSize / 2}px`,
        height: `${treeSize}px`,
      };
      leftForest.push(
        Math.random() * 100 < 50 ? (
          <Tree style={styles} />
        ) : (
          <Pinetree style={styles} />
        )
      );
    }
  }

  for (let r = 0; r < Math.floor(treeNum / 2); r++) {
    for (let c = 0; c < r + 1; c++) {
      const randY = Math.random() * randRange.y;
      const randX = Math.random() * randRange.x;
      const x =
        rightForestPos.x -
        randX -
        c * (rightForestPos.rangeX / Math.floor(treeNum / 2));
      const y =
        rightForestPos.y +
        randY +
        r * (rightForestPos.rangeY / Math.floor(treeNum / 2));
      const styles = {
        left: `${x}px`,
        top: `${y}px`,
        width: `${treeSize / 2}px`,
        height: `${treeSize}px`,
      };

      rightForest.push(
        Math.random() * 100 < 50 ? (
          <Tree style={styles} />
        ) : (
          <Pinetree style={styles} />
        )
      );
    }
  }

  return (
    <div className="background">
      <div className="forest">
        {leftForest}
        <Campfire />
        {rightForest}
      </div>
    </div>
  );
};
