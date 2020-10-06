import React, { CSSProperties } from 'react';

interface FlexBoxProps {
  children: JSX.Element | JSX.Element[];
}

function FlexBox({ children }: FlexBoxProps): JSX.Element {
  const style: CSSProperties = {
    flex: 'auto',
    overflow: 'auto'
  };

  return <div style={style}>{children}</div>;
}

interface FlexContainerProps {
  direction?: CSSProperties['flexDirection'];
  children: JSX.Element[];
}

export default function FlexContainer({
  direction,
  children
}: FlexContainerProps): JSX.Element {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: direction || 'column',
    height: '100%'
  };

  return (
    <div style={style}>
      {children.map((child) => (
        <FlexBox>{child}</FlexBox>
      ))}
    </div>
  );
}
