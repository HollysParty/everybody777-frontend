import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ColorCircle from './ColorCircle';
//참고 https://codesandbox.io/s/react-custom-color-picker-forked-y7873?file=/src/ColorPicker.js

const colors = [
  '#4A90E2',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#417505',
  '#BD10E0',
  '#50E3C2',
  '#9013FE',
  '#B8E986'
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    display: 'flex',
    'flex-wrap': 'wrap'
  }
}));

export default function ColorPicker({
  onClick
}: {
  onClick: (color: string) => void;
}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {colors.map((color) => {
        return <ColorCircle color={color} onClick={onClick} />;
      })}
    </div>
  );
}
