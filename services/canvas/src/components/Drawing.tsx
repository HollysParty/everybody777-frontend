import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Palette from './Palette';
import { BASE_URL } from '../const';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function Drawing(): JSX.Element {
  const classes = useStyles();
  const imageUrl = '/images/sketch/951810fbd307.jpg';
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Save Button</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Image
            <img width={450} src={`${BASE_URL}/${imageUrl}`} alt="tile" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Palette />
        </Grid>
      </Grid>
    </div>
  );
}

export default Drawing;
