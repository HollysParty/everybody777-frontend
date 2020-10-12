import React from 'react';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Palette from './Palette';
import { END_POINT_URL } from '../constants/graphql';

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

const GET_SKETCHES = gql`
  query {
    sketches(id: "1") {
      imageUrl
    }
  }
`;

function Drawing(props: any) {
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
            <img src={`${END_POINT_URL}${imageUrl}`} />
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
