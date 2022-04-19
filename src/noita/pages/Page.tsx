import React from 'react';

const pageStyles: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: '#000000',
};

export type PageProps = {
  children: JSX.Element;
};

export const Page: React.FC<PageProps> = (props: PageProps) => <div style={pageStyles}>{props.children}</div>;
