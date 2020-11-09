import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Palette from './Palette';
import { BASE_URL } from '../const';
import { getSketch } from '../api/getSketch';

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

interface Sketch {
  id: number;
  imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Drawing({ id }: { id: number }): JSX.Element {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    getSketch(id).then((sketch: Sketch) => {
      if (sketch.imageUrl) {
        setImgUrl(sketch.imageUrl);
      }
    });
  }, [setImgUrl]);
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Save Button</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Image
            <img width={450} src={`${BASE_URL}/${imgUrl}`} alt="tile" />
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
