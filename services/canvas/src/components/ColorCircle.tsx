import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  colorCircle: {
    'box-sizing': 'border-box',
    width: '35px',
    height: '35px',
    'flex-shrink': 0,
    'max-width': '100%',
    'border-radius': '50%',
    cursor: 'pointer'
  },
  color: (props: { color: string }) => ({
    backgroundColor: props.color
  })
});
export default function ColorCircle({
  color,
  onClick
}: {
  color: string;
  onClick: (color: string) => void;
}) {
  const classes = useStyles({ color });
  return (
    <div
      className={`${classes.colorCircle} ${classes.color}`}
      onClick={() => onClick(color)}
    />
  );
}
