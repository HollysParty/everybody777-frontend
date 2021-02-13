import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ColorPicker from './ColorPicker';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { setColor } from '../feature/canvas/canvasSlice';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Palette() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { color } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const onChangeColor = (color: string) => {
    dispatch(setColor(color));
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="SMOOTH" />
        <Tab label="SPRAY" />
        <Tab label="ERASER" />
      </Tabs>
      Selected Color: {color}
      <ColorPicker onClick={onChangeColor} />
    </Paper>
  );
}
