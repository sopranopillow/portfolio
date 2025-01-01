import React, { PropsWithChildren } from 'react';
import './Content.css';

export const Content: React.FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <div className="nes-container content with-title">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};
