import React from 'react';
import './Page.css';

const pageStyles: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

export type PageProps = {
  children: JSX.Element;
};

export const Page: React.FC<PageProps> = (props: PageProps) => <div style={pageStyles}>{props.children}</div>;
