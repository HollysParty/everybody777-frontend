import React, { useEffect, useState, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Palette from './Palette';
import { BASE_URL } from '../const';
import { getTile } from '../api/getTile';
import { ImageInfo } from '../types';
import { useCanvasState } from '../context/CanvasProvider';

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

interface Coordinate {
  x: number;
  y: number;
}

interface DrawingProps {
  id: number;
  width?: number;
  height?: number;
}

function Drawing({ id, width = 185, height = 198 }: DrawingProps): JSX.Element {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );
  const [isPainting, setIsPainting] = useState(false);
  const { color } = useCanvasState();

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop
    };
  };

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      context.strokeStyle = color;
      context.lineJoin = 'round';
      context.lineWidth = 5;
      context.globalAlpha = 0.3;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const paint = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  useEffect(() => {
    getTile(id).then((tile: ImageInfo) => {
      if (tile.imageUrl) {
        setImgUrl(tile.imageUrl);
      }
    });
  }, [id, setImgUrl]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);

    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [startPaint, paint, exitPaint]);
  //TODO: https://www.daleseo.com/material-ui-containers-grids/ grid -> container?
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Save Button</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <canvas
              ref={canvasRef}
              className="canvas"
              width={width}
              height={height}
              style={{ backgroundImage: `url(${BASE_URL}/${imgUrl})` }}
            />
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
